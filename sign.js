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
    return (a >= 0 && b >= 0) || (a < 0 && b < 0);
}
console.log(sameSign(-8, -9))