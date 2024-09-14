"use strict";

function retry(count, callback) {
    let i = 0
    return async function again(...args) {
        return await callback(...args).catch(err => {
            if (i >= count) throw err
            i++
            return again(...args)
        })
    }
}

function timeout(delay, callback) {
    return async(...args) => {
        const timer = new Promise((resolve) => { 
        setTimeout(() => {
            resolve(new Error('timeout'))
        }, delay)
    })
    return Promise.race([callback(...args), timer]).then(value => {
        if (Object.entries(value).length) return value
        throw value
    })
    }
}