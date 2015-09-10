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


  it('expects to set value > current value', function() {
    myObj.myProp = 2;
    expect(myObj.myProp[0]).toBe(2);
  });

  it('expects a number', function() {
    myObj.myProp = '4';
    expect(myObj.myProp[0]).toBe(2);
  });

  it('expects to not set value > current value', function() {
    myObj.myProp= 1;
    expect(myObj.myProp[0]).toBe(2);
  });

  it('expects to set value > current value', function() {
    myObj.myProp = 5;
    expect(myObj.myProp[1]).toBe(5);
  });

  it('expects to not set a new property', function() {
    myObj.shraddha = 's';
    expect(myObj.shraddha).toBe(undefined);
  });
});