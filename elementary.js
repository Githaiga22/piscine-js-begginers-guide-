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
    let count = 0;
    let sum = Math.abs(b);  // Use absolute value to handle negative numbers
    let isNegative = (a < 0) !== (b < 0);  // Determine if the result should be negative

    a = Math.abs(a);
    b = Math.abs(b);

    while (sum <= a) {
        sum += b;
        count++;
    }

    // Calculate the fractional part
    let remainder = a - (sum - b);
    let fractionalPart = remainder / b;

    let result = count + fractionalPart;
    return isNegative ? -result : result;
}

function modulo(a, b) {
    return a % b
}
console.log(multiply(-20,10))
console.log(divide(15,4))
console.log(modulo(20,10))