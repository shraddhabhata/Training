var correctAnswers = 0,
    totalAnswers   = 7,
    finalScore     = 0,
    form = document.getElementById('form'),
    formElems = [].slice.call(document.getElementById('form').elements, 0, -2);
    startButton = document.getElementById('start-button'),
   scoreDisplay = document.getElementById('result');

function gradeQuiz() {
  correctAnswers = 0;
  
  // Loop through all of the radio buttons
  formElems.forEach(function(el, i) {
    if ( el.checked && checkAnswer(el.value) ) {
      correctAnswers++;
    }
  });

  finalScore = calculateScore(correctAnswers, totalAnswers);

  scoreDisplay.innerHTML = 'Your score is ' + finalScore + '%';
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
function makeRequest(responseText) {
    console.log('as');
    document.getElementById("myDiv1").innerHTML = responseText;
    console.log(responseText);
 }

myFunc(makeRequest);