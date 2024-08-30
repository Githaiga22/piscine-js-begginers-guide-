function multiply(a, b) {
    if (b === 0) return 0;
    if (b > 0) return a + multiply(a, b - 1);
    if (b < 0) return -multiply(a, -b);
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

function trunc(num) {
    // Use multiply and divide to truncate the number
    return num >= 0 ? divide(num, 1) : -divide(-num, 1);
}

function round(num) {
    const intPart = trunc(num);
    const fracPart = num - intPart;
    return fracPart >= 0.5 ? intPart + 1 : intPart; // Round up or down based on the fractional part
}

function ceil(num) {
    const intPart = trunc(num);
    return num > intPart ? intPart + 1 : intPart; // Increment if num is greater than intPart
}

function floor(num) {
    const intPart = trunc(num);
    return num < intPart ? intPart - 1 : intPart; // Decrement if num is less than intPart
}

// Testing the functions
console.log(trunc(3.7)); // Output: 3
console.log(round(3.7)); // Output: 4
console.log(ceil(3.1));  // Output: 4
console.log(floor(3.1)); // Output: 3
