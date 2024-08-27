function sign(a) {
    if (a === 0 ){
        return 0;
    }
    if (a > 0) {
        return 1;
} else {
    return -1;
}
}
console.log(sign(8))

function sameSign(a, b) {
return sign(a) === sign(b)
}
console.log(sameSign(0, 234))