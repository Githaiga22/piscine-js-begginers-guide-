function addWeek(date) {
    const days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"
];
const epoch = new Date('0001-01-01');
const diffInTime = date.getTime() - epoch.getTime();
const diffInDays = Math.floor(diffInTime/ (1000 * 60 * 60 * 24));

const dayIndex = diffInDays % 14;

return days[dayIndex];
}

function timeTravel({date, hour, minute, second}) {
    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);

    return date;
}
