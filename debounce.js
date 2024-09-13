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
    const { leading = false } = options;
    let leadingCalled = false;

    return function (...args) {
        const context = this;

        // If leading edge is true and function has not been called yet
        if (leading && !leadingCalled) {
            fn.apply(context, args);
            leadingCalled = true;
        }

        // Clear the previous timer
        if (timer) {
            clearTimeout(timer);
        }

        // Set a new timer
        timer = setTimeout(() => {
            fn.apply(context, args);
            leadingCalled = false; // Reset leadingCalled for future calls
        }, delay);
    };
}
