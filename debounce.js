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
    let leadingCalled = false;
    const { leading = false } = options;
    
    return function (...args) {
        const context = this;

        if (leading && !leadingCalled) {
            fn.apply(context, args);
            leadingCalled = true;
        }

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            fn.apply(context, args);
            leadingCalled = false; // Reset for the next leading call
        }, delay);
    };
}


