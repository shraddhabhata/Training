describe("A suite", function() {
  it('expects the increment function to return incremented value', function() {
  	var s = new veretechConstructor(10);
  	expect(s.incrementVar()).toBe(11);
  });
  it('expects the decrement function to return decremented value', function() {
  	var s = new veretechConstructor(10);
  	expect(s.decrementVar()).toBe(9);
  });
  it('expects the decrement function to return decremented value', function() {
  	var s = new veretechConstructor();
  	expect(s.incrementVar()).toBe(1);
  });
   it('expects the decrement function to return decremented value', function() {
  	var s = new veretechConstructor();
  	expect(s.decrementVar()).toBe(-1);
  });
  it('expects the increment/decrement function to return error value', function() {
  	var s = new veretechConstructor('asr');

  	expect(s.incrementVar()).toBe('Error');
  	expect(s.decrementVar()).toBe('Error');
  });
});