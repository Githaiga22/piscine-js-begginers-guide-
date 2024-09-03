function firstDayWeek(week, year) {
    let time = new Date(year);
    if (week == 1) {
        time.setHours(24);
        return formatDate(time);
    }

    let dayPlus = week * 7 * 24;
    time.setHours(dayPlus - 123);

    for (let i = 0; i < 7; i++) {
        if (getWeekDay(time) === 'Monday') {
            return formatDate(time);
        }
        time.setHours(-24);
    }

    return time;
}

function getWeekDay(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay() - 1];
}

function formatDate(date) {
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate() - 1).padStart(2, '0');
    let year = String(date.getFullYear()).padStart(4, '0');
    return `${day}-${month}-${year}`;
}
