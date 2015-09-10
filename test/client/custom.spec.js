describe("custom.js", function() {
  beforeEach(function() {
     browser.get('/sample/public/index.html')
  });
  it('expects the initial values for variables to be avaiable', function() {
  	expect(correctAnswers).toBe(0);
    expect(totalAnswers).toBe(7);
    expect(finalScore).toBe(0);
  });
  
  /*it('expects to return correct value of answers', function() {
    expect(checkAnswer('abc')).toBe();
  });*/
  
  //it('expects to show form', function() {
    //expect(showForm()).
  //});

});