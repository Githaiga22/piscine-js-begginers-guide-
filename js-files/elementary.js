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
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    let quotient = 0;
    let positiveA = Math.abs(a);
    let positiveB = Math.abs(b);

    while (positiveA >= positiveB) {
        positiveA -= positiveB;
        quotient++;
    }

    // Determine the sign of the quotient
    return (a < 0) ^ (b < 0) ? -quotient : quotient;
}
function modulo(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    let quotient = divide(a, b);
    return a - multiply(quotient, b);
}

console.log(multiply(-20,10))
console.log(divide(15,4))
console.log(modulo(20,10))