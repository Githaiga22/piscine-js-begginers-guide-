function filterShortStateName(arr) {
    return arr.filter((item) => item.length < 7);
}
console.log(filterShortStateName(["Allan"]))

function filterStartVowel(arr) {
    return arr.filter((item) => /^[aeiou]/i.test(item));
}
console.log(filterStartVowel(["Allan"]))

function filter5Vowels(arr) {
    return arr.filter((item) => item.match(/[aeiou]/gi).length >= 5);
}
console.log(filter5Vowels(["indianese"]))
function filter1DistinctVowel(arr) {
    return arr.filter(
        (item) => new Set(item.toLowerCase().match(/[aeiou]/gi)).size === 1
    );
}
console.log(filter1DistinctVowel(["lucrative"]))

function multiFilter(arr) {
    arr = arr.filter((item) => {
        let capital = item.capital.length >= 8;
        let name = !/^[aeiou]/i.test(item.name);
        let tag = /[aeiou]/i.test(item.tag);
        let region = item.region !== "South";
        return capital && name && tag && region;
    });
    return arr;
}