function invert(obj) {
    let obj2 = {}
    let keys = Object.keys(obj)
    keys.forEach(key => {
        let value = obj[key]
        obj2[val] = key
    })
    return obj2
}