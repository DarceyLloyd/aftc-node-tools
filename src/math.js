exports.isEven = function(n) {
    return n % 2 === 0;
}

exports.isOdd = function(n) {
    return Math.abs(n % 2) === 1;
}

exports.roundTo = function(v, dec) {
    return +(Math.round(Number(v + "e+" + dec)) + "e-" + dec);
}
