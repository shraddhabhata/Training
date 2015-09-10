describe("custom.js", function() {

  it('expects the initial values for variables to be avaiable', function() {
  	expect(correctAnswers).toBe(0);
    expect(totalAnswers).toBe(7);
    expect(finalScore).toBe(0);
  });
  
  it('expects to return correct value of answers', function() {
    expect(checkAnswer("'abc'")).toBe(1);
    expect(checkAnswer("new function() {}")).toBe(1);
  });
    
  it('should grade quiz', function() {
      expect(gradeQuizChild(4, 7)).toBeGreaterThan(57);
  });
   
});