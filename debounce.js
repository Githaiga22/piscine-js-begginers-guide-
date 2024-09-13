function debounce(fn, delay) {
    let timer = null;
    
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function opDebounce(fn, delay, options = {}) {
    let timer = null;
    let first = true;
    const { leading = false } = options;
    
    return function (...args) {
        if (first && leading) {
            fn.apply(this, args);
            first = false;
        }
        
        if (timer) {
            clearTimeout(timer);
        }
        
        timer = setTimeout(() => {
            fn.apply(this, args);
            first = true; // Reset for the next leading call
        }, delay);
    };
}


