//shallow copy using spread operator
const clone1 = Object.freeze({...person});
const clone2 = Object.freeze({...person});

const samePerson = person;

person.age += 1;
person.country = 'FR'; 

//console.log('clone1:', clone1);