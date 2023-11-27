function contarInteirosNoIntervalo(dados, primeiro, N) {
    return dados.filter(valor => Number.isInteger(valor) && valor >= primeiro && valor <= N).length;
}


const conjuntoDeDados = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
console.log(contarInteirosNoIntervalo(conjuntoDeDados, 3, 8));

module.exports = contarInteirosNoIntervalo
