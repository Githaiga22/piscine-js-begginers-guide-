function chunk(array, size) {
const result = [];
    for (let i = 0; i < array.length; i += size) {
        const subArray = array.slice(i, i + size);
        result.push(subArray);
    }
    return result;
}

console.log(chunk([1,2,3,4], 1))