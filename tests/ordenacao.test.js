const quicksort = require('../funcoes/ordenacao');

test('Ordenação de [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5] deve ser [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]', () => {
  expect(quicksort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
});

test('Ordenação de array vazio deve ser array vazio', () => {
  expect(quicksort([])).toEqual([]);
});
