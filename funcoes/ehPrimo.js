function ehPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


console.log(ehPrimo(7)); 
console.log(ehPrimo(10)); 

module.exports = ehPrimo
