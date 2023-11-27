const contarInteirosNoIntervalo = require('../funcoes/contagem');

test('Contagem de inteiros entre 3 e 8 em [1, 3, 5, 7, 9, 2, 4, 6, 8, 10] deve ser 6', () => {
  expect(contarInteirosNoIntervalo([1, 3, 5, 7, 9, 2, 4, 6, 8, 10], 3, 8)).toBe(6);
});

test('Contagem de inteiros entre 1 e 5 em array vazio deve ser 0', () => {
  expect(contarInteirosNoIntervalo([], 1, 5)).toBe(0);
});
