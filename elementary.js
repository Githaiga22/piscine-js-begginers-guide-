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
    if (b === 0) throw new Error("Division by zero is not allowed!");

    let count = 0;
    let absA = Math.abs(a);
    let absB = Math.abs(b);
    let isNegative = (a < 0) !== (b < 0); // Determine the sign of the result

    // Subtract the divisor from the dividend until the dividend is less than the divisor
    while (absA >= absB) {
        absA -= absB;
        count++;
    }

    // Calculate the fractional part
    let fractionalPart = 0;
    let numerator = absA;
    let denominator = absB;

    for (let i = 0; i < 10 && numerator !== 0; i++) {
        numerator *= 10;
        let digit = 0;

        while (numerator >= denominator) {
            numerator -= denominator;
            digit++;
        }

        fractionalPart += digit * Math.pow(10, -(i + 1));
    }

    let result = count + fractionalPart;
    return isNegative ? -result : result;
}

function modulo(a, b) {
    return a % b
}
console.log(multiply(-20,10))
console.log(divide(15,4))
console.log(modulo(20,10))