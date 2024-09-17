function repeat(str, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result +=str;
    }
    return result;
}
console.log(repeat('abc', 3))