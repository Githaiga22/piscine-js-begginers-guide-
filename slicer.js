function slice(input, start, end) {
    //handle -ve indices
    if (Array.isArray(input)) {
      return input.slice(start, end);
    }else if (typeof input === 'string') {
        return input.slice(start, end);
    }else {
        throw new TypeError("Input must be an array or a string")
    }

}

const str = "Hello, World!";
console.log(slice(str, 7));          // Output: "World!"
console.log(slice(str, 0, 5));       // Output: "Hello"
console.log(slice(str, -6));         // Output: "World!"
console.log(slice(str, -6, -1));     // Output: "World"
