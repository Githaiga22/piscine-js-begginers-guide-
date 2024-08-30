function split(string, separator) {
    const result = [];
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

    result.push(currentChunk);
    return result;
}


console.log(split('hello world', ' '));  
console.log(split('a,b,c', ','));       

function join(array, separator = '') {
    let result = '';

    for (let i = 0; i < array.length; i++) {
        result += array[i];
        if (i < array.length - 1) {
            result += separator;
        }
    }

    return result;
}


console.log(join(['hello', 'world'], ' '));
console.log(join(['a', 'b', 'c'], ','));    
