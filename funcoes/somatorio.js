function somarArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}


const numeros = [1, 2, 3, 4, 5];
console.log(somarArray(numeros));

module.exports = somarArray
