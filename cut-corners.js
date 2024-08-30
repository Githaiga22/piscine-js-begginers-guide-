function  trunc(num) {
    return num - (num % 1);
}
console.log(trunc(-3.1))

function round(num) {
    const intPart = trunc(num);
    const fracPart = num - intPart;
    return fracPart >= 0.5 ? intPart + 1 : fracPart <= -0.5 ? intPart -1 : intPart;
}

console.log(round(3.7))

function ceil(num) {
    const intPart = trunc(num);
    return num > intPart ? intPart + 1 : intPart;
}

console.log(ceil(3.1))

function floor(num) {
    const intPart = trunc(num);
    return num <  intPart ? intPart - 1 : intPart;
}
console.log(floor(-3.1))