function slice(input, start, end) {
   // Handle the case where input is an array or string
   const length = input.length;
    
   // Adjust start index if it's negative
   let startIndex = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
   
   // Adjust end index if it's provided and is negative
   let endIndex = typeof end === 'undefined' ? length : (end < 0 ? Math.max(length + end, 0) : Math.min(end, length));
   
   // Initialize an empty array or string depending on input type
   let result = Array.isArray(input) ? [] : '';
   
   // Loop from startIndex to endIndex and collect the elements or characters
   for (let i = startIndex; i < endIndex; i++) {
       if (Array.isArray(input)) {
           result.push(input[i]);
       } else {
           result += input[i];
       }
   }
   return result;
}

console.log(slice([1, 2, 3, 4, 5], 1, 3)); // -> [2, 3]
console.log(slice([1, 2, 3, 4, 5], -3, -1)); // -> [3, 4]

// Example usage with strings
console.log(slice("hello world", 0, 5)); // -> "hello"
console.log(slice("hello world", -6));