function checkAnswer(value) {
  var type = typeof eval(value),
      correct   = false;

  // Even though null is a primitive type, it return 'object' with the typeof operator
  if (value === 'null') {
    type = 'null';
  }

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
