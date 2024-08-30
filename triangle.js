function triangle( char, height) {
    let result = "";
    for (let i = 0; i <= height; i++) {
        result +=  char.repeat(i) + '\n';
        }
        return result;
}
console.log(triangle('*', 5));
