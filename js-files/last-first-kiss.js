function first(value) {
    if (Array.isArray(value) || typeof value === 'string') {
        return value[0];
    }

};
//console.log(first([12,19,30,40]))

function last(value) {
    if (Array.isArray(value) || typeof value === 'string') {
        return value[value.length-1];
    } else {
        throw new TypeError('Argument must be an array or string')
    }
}
//console.log(last([12,34,67,80]))

function kiss(value) {
    if (Array.isArray(value) || typeof value === 'string') {
        return [last(value), first(value)];
    } else {
        throw new TypeError('Argument must be an array or a string')
    }
}
//console.log(kiss([10,20,50]))