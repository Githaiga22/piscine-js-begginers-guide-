function trunc(num) {
    return num >= 0 ? Math.floor(num) : Math.ceil(num);
}

function round(num) {
    const intPart = trunc(num);
    const fracPart = num - intPart;
    return fracPart >= 0.5 ? intPart + 1 : intPart; // Adjusted to handle positive numbers only
}

function ceil(num) {
    const intPart = trunc(num);
    return num > intPart ? intPart + 1 : intPart; // If num is greater than intPart, increment
}

function floor(num) {
    const intPart = trunc(num);
    return num < intPart ? intPart - 1 : intPart; // If num is less than intPart, decrement
}

// Test array
const nums = [3.7, -3.7, 3.1, -3.1];

console.log(nums.map(round)); // Output: [ 4, -3, 3, -3 ]
console.log(nums.map(floor)); // Output: [ 3, -4, 3, -4 ]
console.log(nums.map(trunc)); // Output: [ 3, -3, 3, -3 ]
console.log(nums.map(ceil));  // Output: [ 4, -3, 4, -3 ]
