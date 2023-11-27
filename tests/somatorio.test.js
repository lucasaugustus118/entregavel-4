const somarArray  = require('../funcoes/somatorio');

test('Soma do array [1, 2, 3, 4, 5] deve ser 15', () => {
  expect(somarArray([1, 2, 3, 4, 5])).toBe(15);
});

test('Soma do array vazio deve ser 0', () => {
  expect(somarArray([])).toBe(0);
});
