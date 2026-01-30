export const singleProductRecommendation = (options = []) => {
  let highestScore = options[0].score;
  let singleProduct = options[0].product;

  for (let i = 0; i < options.length; i++) {
    let current = options[i];

    if (current.score > highestScore) {
      highestScore = current.score;
      singleProduct = current.product;
    }

    //caso de empate usa o ultimo valor
    if (current.score === highestScore) {
      singleProduct = current.product;
    }
  }
  return [singleProduct];
};
