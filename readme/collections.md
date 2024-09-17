1. Defining Sample Variables
```bash
const str = 'hello';
const arr = [1, 2, 1, 3];
const obj = { x: 45, y: 75, radius: 24 };
const set = new Set([1, 2, 1, 3]);
const map = new Map([
    ['a', 1],
    ['b', 2],
    [3, 'c'],
    [4, 'd']
]);
```
- str: A string variable containing the word 'hello'.
- arr: An array containing the elements [1, 2, 1, 3]. Notice it has duplicate elements.
- obj: An object with properties x, y, and radius, storing numerical values.
- set: A Set object, which only stores unique values. The duplicates in the array [1, 2, 1, 3] are removed when converting it to a set, resulting in { 1, 2, 3 }.
- map: A Map object containing key-value pairs. It includes both string keys ('a', 'b') and numeric keys (3, 4).

2. Conversion Functions
These functions convert data between different types (e.g., arrays, sets, strings, maps, objects).
```bash
function arrToSet(arr) {
    return new Set(arr);
}
```
This function takes an array as input and returns a Set object, removing any duplicate elements.
```bash
function arrToStr(arr) {
    return arr.join('');
}
```
arrToStr: Converts an array to a string by joining its elements without any separator.
```bash
function setToArr(set) {
    return Array.from(set);
}
```
setToArr: Converts a Set to an array, preserving the order of insertion.
```bash
function setToStr(set) {
    return setToArr(set).join('');
}
```
setToStr: Converts a Set to a string by first converting it to an array and then joining the elements.
```bash
function strToArr(str) {
    return Array.from(str);
}
```
strToArr: Converts a string to an array, where each character is an element in the array
```bash
function strToSet(str) {
    return new Set(str);
}
```
strToSet: Converts a string to a Set of characters, removing any duplicates.
```bash
function mapToObj(map) {
    const obj = {};
    map.forEach((value, key) => {
        obj[key] = value;
    });
    return obj;
}
```
mapToObj: Converts a Map to an object. The keys of the map become the keys of the object.
```bash
function objToArr(obj) {
    return Object.values(obj);
}
```
objToArr: Converts an object to an array, where each value in the object becomes an element
```bash
function objToMap(obj) {
    return new Map(Object.entries(obj));
}
```
objToMap: Converts an object to a Map. The object's keys and values become the map's keys and values.
```bash
function arrToObj(arr) {
    return arr.reduce((acc, value, index) => {
        acc[index] = value;
        return acc;
    }, {});
}
```
arrToObj: Converts an array to an object, where the array indices become the object keys.
```bash
function strToObj(str) {
    return Array.from(str).reduce((acc, char, index) => {
        acc[index] = char;
        return acc;
    }, {});
}
```
strToObj: Converts a string to an object, where each character in the string becomes a value, and the index in the string becomes the key.

### 3. Super Type Function

This function determines the "super type" of a value, returning a string that represents the type of the given value.

```bash
function superTypeOf(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (Array.isArray(value)) return 'Array';
    if (value instanceof Map) return 'Map';
    if (value instanceof Set) return 'Set';
    if (typeof value === 'object') return 'Object'; 
    if (typeof value === 'string') return 'String'; 
    if (typeof value === 'number') return 'Number'; 
    if (typeof value === 'function') return 'Function'; 
    return typeof value;
}
```
**superTypeOf:**

- Checks if the value is null or undefined and returns 'null' or 'undefined'.
 - Uses Array.isArray to check if the value is an array.
-  Uses instanceof to check if the value is a Map or Set.
-  Checks for common JavaScript types (object, string, number, function), and returns their names with the correct capitalization ('Object', 'String', 'Number', 'Function').
-  For any other type not explicitly handled, it returns the result of typeof value.

This function is useful for determining the type of various data structures and primitive values in JavaScript.


