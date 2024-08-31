function letterSpaceNumber(str) {
    let result = []
    let Regex = /[a-zA-Z]\d /g;
     result = str.match(Regex)
    return result
}
console.log(letterSpaceNumber("Allan9 hello"))