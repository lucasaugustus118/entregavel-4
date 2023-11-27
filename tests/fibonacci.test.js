const fibonacci = require('../funcoes/fibonacci');

test('Fibonacci de 6 deve ser 8', () => {
  expect(fibonacci(6)).toBe(8);
});

test('Fibonacci de 0 deve ser 0', () => {
  expect(fibonacci(0)).toBe(0);
});
