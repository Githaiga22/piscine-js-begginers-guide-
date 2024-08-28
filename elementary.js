function multiply(a, b) {
    if (b == 0)
    return 0;
if (b > 0) {
return a + multiply(a, b - 1);
}
if (b < 0) {
    return -multiply(a, -b);
}
} 
function divide(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b
}
console.log(multiply(-20,10))
console.log(divide(20,10))
console.log(modulo(20,10))