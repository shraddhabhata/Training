var correctAnswers = 0,
    totalAnswers   = 7,
    finalScore     = 0;
  

function gradeQuizChild(correctParam, totalParam) {
  finalScore =  correctParam / totalParam * 100;
  return finalScore;
}

function checkAnswer(value) {
  var evalValue = typeof eval(value);

  switch (evalValue) {
    case 'function':
    case 'object':
      break;
    default:  
      correctAnswers++;
  };
  console.log(correctAnswers);
  return correctAnswers;
}