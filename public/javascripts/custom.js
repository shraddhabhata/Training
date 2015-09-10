function checkAnswer(value) {
  var type = typeof eval(value),
      correct   = false;

  switch (type) {
    case 'function':
    case 'object':
      break;

    default:  
      correct = true;
  };
  
  return correct;
}

function calculateScore(correctAnswersParam, totalAnswersParam) {
   return Math.round(correctAnswersParam / totalAnswersParam * 100);
}
