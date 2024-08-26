function id(value) {
    return value;
}

function getLength(item) {
    if (Array.isArray(item) || typeof item === 'string') {
        return item.length;
    }else {
        throw new TypeError('Argument must be an array or a string');
    }
}

//console.log(id(42))
//console.log(getLength(["hello word","how are you"]))