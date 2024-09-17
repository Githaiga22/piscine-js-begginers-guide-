function pyramid(char, height) {
let result = '';
    for(let i = 1; i <= height; i++) {
    const numChars = 2 * i - 1;
    const padding = height - i;

    const row = ' '.repeat(padding * char.length) + char.repeat(numChars);
    result += row;

    if(i !== height) {
        result += '\n';
    }
}
return result;
}
console.log(pyramid('a', 5))
console.log(pyramid('*', 5))
console.log(pyramid('{}', 12));