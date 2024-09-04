function customMap(arr, callback) {
    const result = [];
    //loop thru each element in the input array
    for (let i = 0; i < arr.length; i++) {
      const tarnsformedAlement  = callback(arr[i], i, arr);
      result.push(tarnsformedAlement);
    }
    return result
}
console.log(customMap([1, 2, 3], (x) => x * 2));

function flatMap(arr, flat) {
    return arr.reduce(
        (acc, current) => acc.concat(flat(current)),
        []
    )
}
console.log(flatMap([1, 2, 3], (x) => [x, x * 2]));