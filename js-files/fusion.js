function fusion(obj1, obj2) {
    const result = {} 
//loop thru keys in objects(obj 1,2)
    for(let key in obj1) {
        //if key exists in obj1 and obj2
if (key in obj2) {
if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
    //if values are arrays concatenate them
    result[key] = obj1[key].concat(obj2[key]);
} else if (typeof obj1[key] === "number" && typeof obj2[key] === "number") {
    //if both values are numbers, add them
result[key] = obj1[key] + obj2[key];
} else if (typeof obj1[key] === "object" && typeof obj2[key] == "object" && !Array.isArray(obj1[key]) && !Array.isArray(obj2[key])) {
    //if both values are objects but not arrays, merge them
    result[key] = fusion(obj1[key], obj2[key]);
} else if (typeof obj1[key] === "string" && typeof obj2[key] ==="string") {
    //if both values are strings concatenate them
    result[key] = obj1[key] + " " + obj2[key];
}
 else {
    //if types mismatch,replace with obj2's value
    result[key] = obj2[key];
}
} else {
    //if the key exists only in obj1, copy it
    result[key] =obj1[key]
}
    }
    //handle keys that are in obj2 but not in obj1
    for (let key in obj2) {
        if (!(key in obj1)) {
            result[key] = obj2[key];
        }
    }
    return result;
}
//merge arrays
console.log(fusion({ arrr: [1, "2"] }, { arr: 6 }));

//merge strings
console.log(fusion({ str: "salem" }, { str: "alem" }));

//merging numbers
console.log(fusion({ a: 10, b: 8 }, { a: 10 }));

//recursive merge obj
console.log(fusion({ a: { b: [3, 2], c: { d: 8 } } }, { a: { b: [0, 3], c: { d: 3 } } }));
// Output: { a: { b: [ 3, 2, 0, 3 ], c: { d: 11 } } }


