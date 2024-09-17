"use strict";

function throttle(func, wait = 0) {
    let invoked = false 
    return (...args) => {
        if (!invoked) {
            func(...args)
            invoked = true
            setTimeout(() => invoked = false, wait)
        }
    }
}

function opThrottle(func, wait = 0, options = {leading: false, trailing: true}) {
    if (options["leading"] && options["trailing"]) return throttle(func, wait)
        let invoked = false
    let timer
    return (...args) => {
        if (!invoked) {
            if (options["leading"]) func(...args)
                invoked = true
            if (options["trailing"]) clearTimeout(timer)
                setTimeout(() => {
            invoked = false
            if (options["trailing"]) func(...args)
                }, wait)
        }
    }
}

