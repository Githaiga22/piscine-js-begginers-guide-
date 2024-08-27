const check = {
    num: (value) => typeof value === 'number' && !isNaN(value),
    nan: (value) => typeof value === value !== value ? true : false,
    str: (value) => typeof value === 'string',
    bool: (value) => typeof value === 'boolean',
    undef: (value) => typeof value === 'undefined',
    def: (value) => typeof value !== 'undefined',
    arr: (value) => Array.isArray(value),
    obj: (value) => value !== null && typeof value === 'object' && !Array.isArray(value),
    fun: (value) => typeof value === 'function',
    truthy: (value) => !!value,
    falsy: (value) => !value,
};

// Usage examples
console.log(check.num(5));          // true
console.log(check.num('ciao'));     // false
console.log(check.nan(NaN));        // true
console.log(check.str('hello'));    // true
console.log(check.bool(true));      // true
console.log(check.undef(undefined));// true
console.log(check.def(null));       // true
console.log(check.arr([1, 2, 3]));  // true
console.log(check.obj({}));         // true
console.log(check.obj(null));       // false
console.log(check.fun(() => {}));   // true
console.log(check.truthy(1));       // true
console.log(check.falsy(0));        // true
