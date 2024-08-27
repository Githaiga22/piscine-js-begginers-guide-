function words(str) {
    return str.split(' ');
}

function sentence(arr) {
    return arr.join(' ');
}

function yell(str) {
    return str.toUpperCase();
}

function whisper(str) {
    return `*${str.toLowerCase()}*`;
}
console.log(whisper("Hello World"));

function capitalize(str) {
    return str[0].t0UpperCase() + str.slice(1).toLowerCase();
}