
const is = {
    num: (value) => typeof value === 'number' && !isNaN(value),
    nan: (value) => typeof value === 'number' && isNaN(value),
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


console.log(is.num(5));          
console.log(is.num('ciao'));     
console.log(is.nan(NaN));        
console.log(is.str('hello'));    
console.log(is.bool(true));      
console.log(is.undef(undefined));
console.log(is.def(null));       
console.log(is.arr([1, 2, 3]));  
console.log(is.obj({}));         
console.log(is.obj(null));       
console.log(is.fun(() => {}));   
console.log(is.truthy(1));       
console.log(is.falsy(0));        
