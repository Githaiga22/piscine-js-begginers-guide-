const escapeStr = "\` , \\ , /, \" , \' ";
//console.log(escapeStr)
const arr = Object.freeze([4, '2']) 
//console.log(arr)
const obj = Object.freeze({
    str : "Allan Kamau",
    num : 23,
    bool : true,
    undef : undefined
});
//console.log(obj)

const nested = Object.freeze({
    arr : Object.freeze([4, undefined, '2']),
    obj : Object.freeze({
        str : "Allan Kamau",
        num : 23,
        bool : true,
    })
});
//console.log(nested)