// getRecommendations.js

import { multipleProductRecommentaion } from '../utils/multipleProductsRecommendation';
import { singleProductRecommendation } from '../utils/singleProductRecommendation';

const getRecommendations = (formData = {}, products) => {
  const {
    selectedFeatures = [''],
    selectedPreferences = [''],
    selectedRecommendationType = '',
  } = formData;

  const scoreProducts = products.map((product) => {
    const unifiedUserPreferences = [
      ...selectedPreferences,
      ...selectedFeatures,
    ];

    const score = unifiedUserPreferences.filter(
      (escolha) =>
        product.preferences.includes(escolha) ||
        product.features.includes(escolha),
    ).length;

    return { product, score };
  });

  const options = scoreProducts.filter((item) => item.score > 0);

  if (options.length === 0 || !options) return [''];

  if (selectedRecommendationType === 'MultipleProducts') {
    return multipleProductRecommentaion(options);
  }

  if (selectedRecommendationType === 'SingleProduct') {
    return singleProductRecommendation(options);
  }
};

export default { getRecommendations };
