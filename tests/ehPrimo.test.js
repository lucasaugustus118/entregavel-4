const  ehPrimo = require('../funcoes/ehPrimo')

test('7 é um número primo', () => {
  expect(ehPrimo(7)).toBe(true);
});

test('10 não é um número primo', () => {
  expect(ehPrimo(10)).toBe(false);
});
