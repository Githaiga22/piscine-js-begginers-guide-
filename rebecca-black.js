const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const isFriday = (date) => {
    const dates = new Date(date);
    return days[dates.getDay()] === "Friday";
}

const isWeekend = (date) => {
    const dates = new Date(date);
    return days[dates.getDay()] === "Saturday" || days[dates.getDay()] === "Sunday";
}

function isLeapYear(date) {
    const now = new Date(date);
    const year = now.getFullYear();
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

const isLastDayOfMonth = (date) => {
    const newDate = new Date(date);
    
    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    
    const firstDayOfNextMonth = new Date(year, month + 1, 1);
    const lastDayOfMonth = new Date(firstDayOfNextMonth - 1);
    
    return date.getDate() === lastDayOfMonth.getDate() &&
           date.getMonth() === lastDayOfMonth.getMonth() &&
           date.getFullYear() === lastDayOfMonth.getFullYear();
}


