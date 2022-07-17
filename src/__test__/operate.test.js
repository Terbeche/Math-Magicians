import operate from '../logic/operate';

describe('Test number operations', () => {
  it('Test addition', () => {
    expect(operate(2, 5, '+')).toBe('7');
  });
  it('Test subtraction', () => {
    expect(operate(10, 5, '-')).toBe('5');
  });
  it('Test multiplication', () => {
    expect(operate(2, 5, 'x')).toBe('10');
  });
  it('Test division', () => {
    expect(operate(10, 5, '÷')).toBe('2');
  });
  it('Test modulo', () => {
    expect(operate(8, 2, '%')).toBe('0');
  });
});

describe('Test exceptions and errors', () => {
  it('Test for division error', () => {
    expect(operate(5, 0, '÷')).toBe("Can't divide by 0.");
  });
  it('Test modulo when error', () => {
    expect(operate(8, 0, '%')).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});
