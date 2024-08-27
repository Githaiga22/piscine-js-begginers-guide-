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
 if (a > 0 && b > 0) {
    return true;
 }
 if (a < 0 && b < 0) {
    return true;
 }
 if (a === 0 && b === 0 ){
return true;
 } else {
    return false;
 }
}
console.log(sameSign(0, 234))