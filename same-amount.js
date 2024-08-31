
function sameAmount(str, regex1, regex2) {

    let matches1 = str.match(regex1);
    let matches2 = str.match(regex2);

    let count1 = matches1 ? matches1.length : 0;
    let count2 = matches2 ? matches2.length : 0;

    return count1 === count2
}

console.log(sameAmount("aabb", /a/g, /b/g)); // true
console.log(sameAmount("aabbcc", /a/g, /b/g)); // true
console.log(sameAmount("aabbcc", /a/g, /c/g)); // false