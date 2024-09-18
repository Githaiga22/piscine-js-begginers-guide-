# JavaScript

1. Creating a JS file:

    ` echo "console.log('Hello World')" > how-2-js.js`
2. Running the JS script in a browser by importing it into a HTML page:

    `echo '<script type="module" src="how-2-js.js"></script>' > index.html`
- The attribute *module*  specifies the script should be treated as an ES6 module.

3. Create a simple web server:

    `&>/dev/null python3 -m http.server &`
-  A python http server is started, serves files in the current directory. Stdin and Stderr are suppressed. The program runs in the background.

4. Opening a browser at a specified port:
    `xdg-open 'http://localhost:8000'`
- access the address http://localhost:8000, and open the browser console by pressing **Control+Shift+J**.

- Refresh page if you make changes to the JS file.

## Primitives and Operators

**Types**
+ String
+ Number
+ Boolean
+ Undefined
+ Null
+ Infinity

### **Variables**

+ A *variable* stores any value. It is assigned a indentifier.
    - Declare a variable
         ` let name`
    - Assign a value to variable
            ` name = 32`
+  Standard practice for naming Variables is by **camelCase**
+ Doing both declaration and assignment at the same time.
        `let name = 43`

    #### *Constant Variables*
    + Making a variable immutable
            `const name = 87`
## Data Structures

+ **Object**
    - like a map {key:value}
    - keys are always strings
        ```
        {country : 'Kenya',
        town: 'Kisumu',
        postalCode: '}
        ```
    - nesting objects
+ **Array**
    - Use numbers as keys, (starting from 0)
    - `[1,2,3,4]`

## Sets

+ We can assign a value to an object
+ We can create new objects from existing objects
+ Mutability of new objects.

## Functions
+ Transforms input *Arguments* (*parameters*) to return processed result. `input => result`
+ Declaring a fucntion

    ` const add5 = (n) => n + 5`

    `const muliply = (a,b) => a * b`

## Primitive Operators
 + `===` 
 + `!==`

 ## Methods

 Methods are special type of functions tied to a data type.
 Ex:
 1. `.split`
 2. `.toUpper`
 3. `.join`
 
**Constructors**
+ `Array.isArray`
+ `Object.keys`
+ `Array.filter`
+ `Array.map`
+ ``



## Ternary Operator

` count > 9000 ? "OVER 100!!" : "NOT OVER 100!!"`
 if true; return string *OVER 100!!*
 else; return string *NOT OVER 100!!*

 ## Conditional 
 + if-else
 + math.sign

 ## REGEX

 ##
 1. Optional Chaining
    + (**?.**) operator, safely accesses a property of an object thet might be `null` or `undefined`.
2. Logical OR 
    + `||` operator, is used for providing a fallback value.

```JavaScript
function first5Vowels(array) {
return array.filter(word => {
    // Count the vowels in the word
    const vowelCount = word.match(/[aeiou]/gi)?.length || 0;
    return vowelCount >= 5;
});
}
```