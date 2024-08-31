function flat(array, depth = 1) {
    // Initialize the result array
    const result = [];

    // Helper function to recursively flatten arrays
    function flatten(arr, currentDepth) {
        for (const item of arr) {
            if (Array.isArray(item) && currentDepth > 0) {
                // If item is an array and depth is greater than 0, recurse with depth - 1
                flatten(item, currentDepth - 1);
            } else {
                // Otherwise, push the item to the result array
                result.push(item);
            }
        }
    }

    // Start flattening with the specified depth
    flatten(array, depth);

    return result;
}


const nestedArray = [1, [2, [3, [4]], 5], 6];
console.log(flat(nestedArray, 1)); 
console.log(flat(nestedArray, 2)); 
console.log(flat(nestedArray, Infinity)); 
