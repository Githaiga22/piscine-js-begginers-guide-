function get(src, path) {
    const keys = path.split('.');

    let result = src;

    //traverse obj using keys
    for (let key of keys) {
        if (result === undefined || result[key] === undefined) {
            return undefined;
        }
        result = result[key];
    }
    return result;
}

const src = { nested: {key: 'peekaboo'}};
const path = 'nested.key';
console.log(get(src, path));