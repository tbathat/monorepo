import React from 'react';

function RecommendationList({ recommendations }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}

      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index} className="mb-2">
            {recommendation.name}
          </li>
        ))}
      </ul>

      {recommendations.length >= 1 && (
        <div className="flex-col justify-center pt-10 text-sm gap-2">
          <button
            type="button"
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/send?text=Ol%C3%A1%2C%20RD!%20Estou%20enviando%20as%20minhas%20prefer%C3%AAncias%20e%20gostaria%20de%20um%20atendimento%20personalizado',
              )
            }
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          >
            Chat
          </button>
          <p>Entre em contato com nossos consultores diretamente pelo chat</p>
        </div>
      )}
    </div>
  );
}

export default RecommendationList;
