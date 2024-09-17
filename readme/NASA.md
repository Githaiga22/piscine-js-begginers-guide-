## question
1. Create a function named nasa that takes a number N as an argument and returns a string with all numbers from 1 to N separated by spaces. There are three exceptions:

    - Convert numbers which are divisible by 3 to "NA".
    - Convert numbers which are divisible by 5 to "SA".
    - Convert numbers which are divisible by 3 and 5 to "NASA".

Notions

   -  Loops
   -  Recursion

   ## solution
   To solve this problem, we'll create a function named nasa that takes an integer N as an argument and returns a string with numbers from 1 to N. The string will have special rules for numbers divisible by 3, 5, or both:

    Numbers divisible by 3 will be replaced with "NA".
    Numbers divisible by 5 will be replaced with "SA".
    Numbers divisible by both 3 and 5 will be replaced with "NASA".

## Approach:

1. Loop through numbers from 1 to N.
2.  Check each number:
-   If divisible by both 3 and 5, add "NASA" to the result.
 -  If divisible by only 3, add "NA" to the result.
  - If divisible by only 5, add "SA" to the result.
    Otherwise, add the number itself.
   - Join all elements in the result list into a single string, separated by spaces.

## Explanation:

 Looping from 1 to N: The for loop iterates through each number from 1 to N.
 
   **Conditions:**
- i % 3 === 0 && i % 5 === 0:
 Checks if a number is divisible by both 3 and 5.
-   i % 3 === 0: 
Checks if a number is divisible by 3.
-  i % 5 === 0:
 Checks if a number is divisible by 5.
- Result Array: Each processed number or string is pushed into the result array.
- Join: Finally, we use join(" ") to combine all elements in the result array into a single string separated by spaces.


### Visual Example:

For N = 15, the function works as follows:

    1 → "1"
    2 → "2"
    3 → "NA"
    4 → "4"
    5 → "SA"
    6 → "NA"
    7 → "7"
    8 → "8"
    9 → "NA"
    10 → "SA"
    11 → "11"
    12 → "NA"
    13 → "13"
    14 → "14"
    15 → "NASA"

The final result is;
```bash
 "1 2 NA 4 SA NA 7 8 NA SA 11 NA 13 14 NASA".
 ```
### Summary:

This function effectively loops through each number from 1 to N, applying the special rules for numbers divisible by 3, 5, or both, and returns a correctly formatted string. This approach handles all edge cases like small values of N or values that are only divisible by 3 or 5.