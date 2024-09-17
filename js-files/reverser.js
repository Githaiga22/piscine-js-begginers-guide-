function reverse(input) {
    if (typeof input === 'string') {
       
        let reversedArray = [];
       
        for (let i = input.length - 1; i >= 0; i--) {
            reversedArray.push(input[i]);
        }
        
        return reversedArray.join('');
    }
    
    if (Array.isArray(input)) {
       
        let reversedArray = [];
       
        for (let i = input.length - 1; i >= 0; i--) {
            reversedArray.push(input[i]);
        }
    
        return reversedArray;
    }
    
    
    return null;
}

// Test cases
console.log(reverse([1, 2, 3, 4, 5])); 
console.log(reverse("hello"));        
console.log(reverse("pouet"));        
