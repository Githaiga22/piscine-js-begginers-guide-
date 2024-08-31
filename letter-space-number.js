function letterSpaceNumber(str) {
    let result = []
    let Regex = /[a-zA-Z] \d(?![a-zA-Z0-9])/g;
    let matched = str.match(Regex)
    if (matched){
        result = matched;
    }
    return result
}
console.log(letterSpaceNumber("Allan9 hello"))
console.log(letterSpaceNumber('example 1, example 20'))
