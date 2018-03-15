class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  description() {
    return 'this is a calculator classs';
  }
}

describe('calculate addition', function() {
    
    var calculate = new Calculator();

    it('should be able to add two numbers together', function() {
        console.log('success!');
        console.log(calculate.add(1, 3));
        expect(calculate.add(1,3)).toBe(4);
        expect(calculate.subtract(5,1)).not.toBe(12);
        expect(calculate.add(4, 4)).toEqual(8);
        expect(calculate.add(1,1)).toBeLessThan(5);
    });
    it('should be able to declare the calculator class', function() {
        expect(calculate).toBeDefined();
        expect(calculate).not.toBeUndefined();
        expect(calculate).not.toBeNull();
    });
    it('should be able to check the description of the class', function() {
        expect(calculate.description()).toMatch('class');
        expect(calculate.description()).toContain('calculator');
    })
});