function isValid(date) {
    if ( typeof date == 'number') {
        date = new Date(date);
    }
 
    return  date instanceof Date && !isNaN(date.getTime());
}
console.log(isValid(new Date('2023-08-28'))); 
console.log(isValid(new Date('invalid date'))); 
function isAfter(date1, date2) {
    // Convert timestamps (numbers) to Date objects if necessary
    if (typeof date1 === 'number') {
        date1 = new Date(date1);
    }
    if (typeof date2 === 'number') {
        date2 = new Date(date2);
    }
    
    // Ensure both arguments are valid Date objects
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
        throw new TypeError('Arguments must be valid Date objects or timestamps');
    }

    // Return true if the first date is after the second date
    return date1.getTime() > date2.getTime();
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