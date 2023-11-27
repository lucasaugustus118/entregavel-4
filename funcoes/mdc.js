function mdc(a, b) {
    if (b === 0) return a;
    return mdc(b, a % b);
}


console.log(mdc(48, 18)); 

module.exports = mdc