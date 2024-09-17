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
    if (typeof value === 'object') return 'Object'; 
    if (typeof value === 'string') return 'String'; 
    if (typeof value === 'number') return 'Number'; 
    if (typeof value === 'function') return 'Function'; 
    return typeof value;
}
