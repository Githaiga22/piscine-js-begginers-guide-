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
            // Call immediately on the leading edge if `leading` is true
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
            leadingCalled = false; // Allow leading edge call in the future
        }, delay);
    };
}
