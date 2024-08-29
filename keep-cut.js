function cutFirst(str) {
    if (typeof str !== 'string') {
        throw new TypeError('argument must be a string');
    }
    return str.slice(2);
}

console.log(cutFirst("hello"))

function cutLast(str) {
    if (typeof str !== 'string') {
        throw new TypeError('argument must be a string');
    }
    return str.slice(0, -2);
}

console.log(cutLast("hello"))

function cutFirstLast(str) {
    if (typeof str !== 'string') {
        throw new TypeError('argument must be a string');
    }
    return str.slice(2, -2);
}

console.log(cutFirstLast("hello"))

function keepFirst(str) {
    if (typeof str !== 'string') {
        throw new TypeError('argument must be a string');
    }
    return str.slice(0, 2);
}

console.log(keepFirst("hello"))

function keepLast(str) {
    if (typeof str !== 'string') {
        throw new TypeError('argument must be a string');
    }
    return str.slice(-2);
}

console.log(keepLast("hello"))

function keepFirstLast(str) {
    if (typeof str !== 'string') {
        throw new TypeError('argument must be a string');
    }
    if (str.length <= 2) {
        return str;
    }
    return (keepFirst(str) + keepLast(str));
}

console.log(keepFirstLast("af"))