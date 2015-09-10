describe("custom.js", function() {

  it('expects calculateScore() to return a proper grade', function() {
  	expect(calculateScore(5, 10)).toBe(50);
  });
  
  it('expects to return correct value of answers', function() {
    expect(checkAnswer("'abc'")).toBe(true);
    expect(checkAnswer("new Date()")).toBe(false);
    expect(checkAnswer("new function() {}")).toBe(false);
    expect(checkAnswer("Math.round")).toBe(false);
    expect(checkAnswer("[]")).toBe(false);
  });

});