function words(str) {
    return str.split(' ');
}

function sentence(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Argument must be an array');
    }
    return arr.join(' ');
}

console.log(sentence(words("Hello World"))); 

function yell(str) {
    return str.toUpperCase();
}
console.log(yell("Hello World"));

function whisper(str) {
    return `*${str.toLowerCase()}*`;
}
console.log(whisper("Hello World"));

function capitalize(str) {
    if (str.length === 0) return str; 
    return str[0].toUpperCase() + str.slice(1).toLowerCase(); 
}
console.log(capitalize("hello world")); 
