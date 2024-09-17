const normal = /hi/;
console.log(normal.test("oh there!"));

const begin = /^hi/;
console.log(begin.test("hi there!"));

const end = /hi$/;
console.log(end.test("there! hi"));

const beginEnd = /^hi$/;
console.log(beginEnd.test("hi"))
