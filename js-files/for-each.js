function forEach(array, each) {
for (let i = 0; i < array.length; i++) {
    each(array[i], i, array);
}
}

