function longWords(array) {
    return array.every((word) =>  word.length >= 5);
}
console.log(longWords(["Today is a monday"]))

function oneLongWord(arr) {
    return arr.some((word) =>  word.length >= 10);
}
console.log(oneLongWord(["Hello Monday", "world", "how", "are", "you"]))

function noLongWords(array) {
    return array.every((word) => word.length < 7);
}