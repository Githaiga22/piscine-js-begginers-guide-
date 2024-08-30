function split(string, separator) {
    const result = [];
    let currentChunk = '';

    for (let i = 0; i < string.length; i++) {
        // Check if the current slice matches the separator
        if (separator === '' || string.slice(i, i + separator.length) !== separator) {
            currentChunk += string[i]; // Accumulate the character
        } else {
            result.push(currentChunk); // Push the accumulated chunk to the result array
            currentChunk = ''; // Reset the chunk
            i += separator.length - 1; // Skip the length of the separator
        }
    }
    result.push(currentChunk); // Push the last chunk

    return result;
}

// Example usage:
console.log(split('hello world', ' '));  // ["hello", "world"]
console.log(split('a,b,c', ','));        // ["a", "b", "c"]
console.log(split('one,two,three', ',')) // ["one", "two", "three"]

function join(array, separator = '') {
    let result = '';

    for (let i = 0; i < array.length; i++) {
        result += array[i];
        if (i < array.length - 1) {
            result += separator; // Add the separator between elements
        }
    }

    return result;
}

// Example usage:
console.log(join(['hello', 'world'], ' ')); // "hello world"
console.log(join(['a', 'b', 'c'], ','));    // "a,b,c"
console.log(join(['one', 'two', 'three'], ',')) // "one,two,three"
