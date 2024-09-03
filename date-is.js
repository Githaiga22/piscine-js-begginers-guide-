function isValid(date) {
return date instanceof  Date && !isNaN(date.getTime());
}
console.log(isValid(new Date('2023-08-28'))); 
console.log(isValid(new Date('invalid date'))); 

function isAfter(date1, date2) {
return isValid(date1) && isValid(date2) && date1.getTime() > date2.getTime();
}
console.log(isAfter(new Date('2023-08-29'), new Date('2023-08-28'))); // true
console.log(isAfter(new Date('2023-08-27'), new Date('2023-08-28'))); // false

function isBefore(date1, date2){
    return isValid(date1) && isValid(date2) && date1.getTime() < date2.getTime();
}
console.log(isBefore(new Date('2023-08-29'), new Date('2023-08-28'))); // true
console.log(isBefore(new Date('2023-08-27'), new Date('2023-08-28'))); // false

function isFuture(date) {
    const now = new Date();
    return isValid(date) && isAfter(date, now)
}

function isPast(date){
    const now = new Date();
    return isValid(date) && isBefore(date, now)
}