function indexOf(array, value, fromIndex = 0) {
    if (fromIndex < 0) {
        fromIndex = Math.max(0, array.length + fromIndex);
    }
    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === value) {
    return i;
        }
    }
    return -1
} 
function lastIndexOf(array, value, fromIndex = array.length - 1) {
    // Handle negative fromIndex
    if (fromIndex < 0) {
        fromIndex = Math.max(0, array.length + fromIndex);
    }

    for (let i = fromIndex; i >= 0; i--) {
        if (array[i] === value) {
            return i; // Return the index of the last occurrence
        }
    }

    return -1; // Return -1 if the value is not found
}

function includes(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true; // Return true if the value is found
        }
    }
    return false; // Return false if the value is not found
}
