function filterValues(obj, callback) {
    return Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => callback(value))
    );
}


console.log(filterValues(nutritionDB.tomato, (nutrient) => nutrient <= 12));

function mapValues(obj, callback) {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, callback(value)])
    );
}

console.log(mapValues(nutritionDB.onion, (v) => v + 1));

function reduceValues(obj, callback, initialValue) {
    return Object.values(obj).reduce(callback, initialValue);
}
console.log(reduceValues(nutritionDB.garlic, (acc, cr) => acc + cr, 0));



