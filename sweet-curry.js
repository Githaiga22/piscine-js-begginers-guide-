function mult2(a) {
    return (b) => a * b;
}
function add3(a) {
    return function (y) {
        return function (z) {
            return a + y + z;
        };
    };
}

function sub4(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a - b - c - d;
            };
        };
    };
}