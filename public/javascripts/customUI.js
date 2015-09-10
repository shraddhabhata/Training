var correctAnswers = 0,
    totalAnswers   = 7,
    finalScore     = 0;
    form = document.getElementById('form'),
    formElems = [].slice.call(document.getElementById('form').elements, 0, -2);
    startButton = document.getElementById('start-button'),
   scoreDisplay = document.getElementById('result');*/

function gradeQuiz() {
  correctAnswers = 0;
  
  formElems.forEach(function(el, i) {
     if (el.checked) {
       checkAnswer(el.value);
     }
  });
 
  finalScore =  gradeQuizChild(correctAnswers, totalAnswers);
  scoreDisplay.innerHTML = 'Your score is ' + Math.round(finalScore) + '%';
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

function showForm() {
  form.classList.add('show');
  startButton.classList.add('hide');
}

function resetQuiz() {
  form.classList.remove('show');
  formElems.forEach(function(el) { el.checked = false; });
  startButton.classList.remove('hide');
  correctAnswers = 0;
  document.body.scrollTop = 0;
  scoreDisplay.innerHTML = '';
}