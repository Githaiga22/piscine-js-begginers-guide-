function longWords(array) {
    return array.every(word => typeof word === 'string' && word.length >= 5);
}
console.log(longWords(["Today is a monday"]))

function oneLongWord(arr) {
    return arr.some(word => typeof word === 'string' && word.length >= 10);
}
console.log(oneLongWord(["Hello Monday", "world", "how", "are", "you"]))

function noLongWords(array) {
    return array.every(word => typeof word !== 'string' && word.length < 7);
}