
function sameAmount(str, regex1, regex2) {

    let matches1 = str.match(new RegExp(regex1,"g"));
    let matches2 = str.match(new RegExp(regex2,"g"));

    if (matches1 === null || matches2 === null){
        return false;
    }

    let count1 = matches1 ? matches1.length : 0;
    let count2 = matches2 ? matches2.length : 0;

    return count1 === count2
}

console.log(sameAmount("aabb", /a/g, /b/g)); 
console.log(sameAmount("aabbcc", /a/g, /b/g)); 
console.log(sameAmount("aabbcc", /a/g, /c/g)); 
console.log(sameAmount("data", /q /, /qqqqqqq/)); 