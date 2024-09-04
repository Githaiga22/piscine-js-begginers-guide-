function map(arr, action) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(action(arr[i], i, arr));
    }
    return res;
}
console.log(map([1, 2, 3], (x) => x * 2));

function flatMap(arr, flat) {
    return arr.reduce(
        (acc, current) => acc.concat(flat(current)),
        []
    )
}
console.log(flatMap([1, 2, 3], (x) => [x, x * 2]));