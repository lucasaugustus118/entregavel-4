const mdc = require('../funcoes/mdc');

test('MDC de 48 e 18 deve ser 6', () => {
  expect(mdc(48, 18)).toBe(6);
});

test('MDC de 0 e 5 deve ser 5', () => {
  expect(mdc(0, 5)).toBe(5);
});
