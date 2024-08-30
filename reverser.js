function reverse(input) {
    if (typeof input === 'string') {
        // Initialize an empty array to collect the reversed characters
        let reversedArray = [];
        // Iterate through the string from the end to the beginning
        for (let i = input.length - 1; i >= 0; i--) {
            reversedArray.push(input[i]);
        }
        // Join the array back into a string
        return reversedArray.join('');
    }
    
    if (Array.isArray(input)) {
        // Initialize an empty array to collect the reversed elements
        let reversedArray = [];
        // Iterate through the array from the end to the beginning
        for (let i = input.length - 1; i >= 0; i--) {
            reversedArray.push(input[i]);
        }
        // Return the reversed array
        return reversedArray;
    }
    
    // If the input is neither a string nor an array, return null or throw an error
    return null;
}

// Test cases
console.log(reverse([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverse("hello"));         // "olleh"
console.log(reverse("pouet"));         // "teuop"
