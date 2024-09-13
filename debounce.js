"use strict";

function debounce(func, wait = 0) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => func(...args), wait)
    }
}


function opDebounce(func, wait = 0, options = {}) {
    let timer
    return (...args) => {
        if (!timer && options["leading"]) func(...args)
        clearTimeout(timer)
        timer = setTimeout(() => func(...args), wait)
    }
}