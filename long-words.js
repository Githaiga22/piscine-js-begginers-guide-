function longwords(array) {
    return array.every(word => typeof word === 'string' && word.length >= 5);
}
console.log(longwords(["Today is a monday"]))

function oneLongWord(arr) {
    return arr.some(word => typeof word === 'string' && word.length >= 10);
}
console.log(oneLongWord(["Hello Monday", "world", "how", "are", "you"]))

function noLongWord(array) {
    return array.every(word => typeof word !== 'string' && word.length < 7);
}