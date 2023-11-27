function quicksort(arr) {
    if (arr.length <= 1) return arr;

    const pivo = arr[0];
    const esquerda = [];
    const direita = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivo) {
            esquerda.push(arr[i]);
        } else {
            direita.push(arr[i]);
        }
    }

    return quicksort(esquerda).concat(pivo, quicksort(direita));
}


const arrayDesordenado = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(quicksort(arrayDesordenado)); 

module.exports = quicksort