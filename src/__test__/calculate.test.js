import calculate from '../logic/calculate';

describe('testing calculate function', () => {
  const obj = {};
  test('Can\'t divide by zero', () => {
    const obj = {
      total: '0',
      next: '0',
      operation: '+',
    };
    const buttonName = '0';
    expect(calculate(obj, buttonName).next).toBeUndefined();
  });

  test('Check if the button pressed is AC', () => {
    const obj = {
      total: '12',
      next: '5',
      operation: '+',
    };
    const buttonName = 'AC';
    expect(calculate(obj, buttonName).total).toBeNull();
  });

  test('Substraction', () => {
    const obj = {
      total: 0,
      next: 0,
      operation: '-',
    };
    const buttonName = '0';
    expect(calculate(obj, buttonName).total).toBe(0);
  });

  test('Division', () => {
    obj.operation = '÷';
    obj.total = 12;
    obj.next = 3;
    expect(calculate(obj, '=')).toEqual({ next: null, operation: null, total: '4' });
  });
  test('Modulus', () => {
    obj.operation = '%';
    obj.total = 16;
    obj.next = 4;
    expect(calculate(obj, '=')).toEqual({ next: null, operation: null, total: '0' });
  });
});
