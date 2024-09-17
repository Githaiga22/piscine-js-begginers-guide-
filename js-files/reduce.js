function fold(array, f, accum) {
    for (let i = 0; i < array.length; i++) {
        accum = f(accum, array[i], i, array);
    }
    return accum;
}

function foldRight(array, f, accum) {
    for (let i = array.length - 1; i >= 0; i--) {
        accum = f(accum, array[i], i, array);
    }
    return accum;
}

function reduce(array, f) {
    let accum = array[0];
    for (let i = 1; i < array.length; i++) {
        accum = f(accum, array[i], i, array);
    }
    return accum;
}

function reduceRight(array, f) {
    let accum = array[array.length - 1];
    for (let i = array.length - 2; i >= 0; i--) {
        accum = f(accum, array[i], i, array);
    }
    return accum;
}