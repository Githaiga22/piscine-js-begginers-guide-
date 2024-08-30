function split(string, separator) {
    const result = [];
    
    if (separator === '') {
        // When the separator is an empty string, split the string into individual characters
        for (let i = 0; i < string.length; i++) {
            result.push(string[i]);
        }
    } else {
        let currentChunk = '';

        for (let i = 0; i < string.length; i++) {
            if (string.slice(i, i + separator.length) === separator) {
                result.push(currentChunk);
                currentChunk = '';
                i += separator.length - 1;
            } else {
                currentChunk += string[i];
            }
        }
        result.push(currentChunk); // Push the last chunk
    }

    return result;
}

// Example usage:
console.log(split('Riad', ''));        // ["R", "i", "a", "d"]
console.log(split('hello world', ' '));  // ["hello", "world"]
console.log(split('a,b,c', ','));        // ["a", "b", "c"]

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
