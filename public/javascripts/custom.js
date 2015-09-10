function checkAnswer(value) {
  var evalValue = typeof eval(value),
      correct   = false;

  switch (evalValue) {
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
