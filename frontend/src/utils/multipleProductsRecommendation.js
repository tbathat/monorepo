export const multipleProductRecommentaion = (options = []) => {
  const multipleRecommend = options.map((item) => item.product);

  return multipleRecommend;
};
