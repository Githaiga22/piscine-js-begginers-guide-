// Define sample variables
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

// Conversion Functions
function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.join('');
}

function setToArr(set) {
    return Array.from(set);
}

function setToStr(set) {
    return setToArr(set).join('');
}

function strToArr(str) {
    return Array.from(str);
}

function strToSet(str) {
    return new Set(str);
}

function mapToObj(map) {
    const obj = {};
    map.forEach((value, key) => {
        obj[key] = value;
    });
    return obj;
}

function objToArr(obj) {
    return Object.values(obj);
}

function objToMap(obj) {
    return new Map(Object.entries(obj));
}

function arrToObj(arr) {
    return arr.reduce((acc, value, index) => {
        acc[index] = value;
        return acc;
    }, {});
}

function strToObj(str) {
    return Array.from(str).reduce((acc, char, index) => {
        acc[index] = char;
        return acc;
    }, {});
}

// Super type function
function superTypeOf(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (Array.isArray(value)) return 'Array';
    if (value instanceof Map) return 'Map';
    if (value instanceof Set) return 'Set';
    if (typeof value === 'object') return 'Object'; // Capitalize 'Object'
    if (typeof value === 'string') return 'String'; // Capitalize 'String'
    if (typeof value === 'number') return 'Number'; // Capitalize 'Number'
    if (typeof value === 'function') return 'Function'; // Capitalize 'Function'
    return typeof value; // For other types, return as is
}

// Test cases
console.log(arrToSet(arr)); // -> Set { 1, 2, 3 }
console.log(arrToStr(arr)); // -> '1213'
console.log(setToArr(set)); // -> [1, 2, 3]
console.log(setToStr(set)); // -> '123'
console.log(strToArr(str)); // -> ['h', 'e', 'l', 'l', 'o']
console.log(strToSet(str)); // -> Set { 'h', 'e', 'l', 'o' }
console.log(mapToObj(map)); // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
console.log(objToArr(obj)); // -> [45, 75, 24]
console.log(objToMap(obj)); // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
console.log(arrToObj(arr)); // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
console.log(strToObj(str)); // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

console.log(superTypeOf(map)); // -> 'Map'
console.log(superTypeOf(set)); // -> 'Set'
console.log(superTypeOf(obj)); // -> 'Object'
console.log(superTypeOf(str)); // -> 'String'
console.log(superTypeOf(666)); // -> 'Number'
console.log(superTypeOf(NaN)); // -> 'Number'
console.log(superTypeOf(arr)); // -> 'Array'
console.log(superTypeOf(null)); // -> 'null'
console.log(superTypeOf(undefined)); // -> 'undefined'
console.log(superTypeOf(superTypeOf)); // -> 'Function'
