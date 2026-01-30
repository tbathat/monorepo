import React from 'react';
import Checkbox from '../../shared/Checkbox';

function RecommendationType({ onRecommendationTypeChange }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Tipo de Recomendação:</h2>
      <div
        className="flex items-center gap-2 px-2 py-1 rounded
 "
      >
        <div
          className="flex items-center px-2 py-1 rounded
  hover:bg-gray-100
  has-[:checked]:bg-blue-50"
        >
          <Checkbox
            type="radio"
            name="recommendationType"
            value="SingleProduct"
            onChange={() => onRecommendationTypeChange('SingleProduct')}
            className="mr-2"
          />
          <label htmlFor="SingleProduct" className="mr-4">
            Produto Único
          </label>
        </div>
        <div
          className="flex items-center  px-2 py-1 rounded
  hover:bg-gray-100
  has-[:checked]:bg-blue-50"
        >
          <Checkbox
            type="radio"
            name="recommendationType"
            value="MultipleProducts"
            onChange={() => onRecommendationTypeChange('MultipleProducts')}
            className="mr-2"
          />
          <label htmlFor="MultipleProducts">Múltiplos Produtos</label>
        </div>
      </div>
    </div>
  );
}

export default RecommendationType;
