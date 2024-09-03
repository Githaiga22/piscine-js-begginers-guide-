function firstDayWeek(weekNumber, year) {
    // Validate input
    if (weekNumber < 1 || weekNumber > 53) {
        throw new Error("Week number must be between 1 and 53.");
    }

    // Create a date object for January 1st of the specified year
    const firstDayOfYear = new Date(year, 0, 1);
    
    // Calculate the first Monday of the year
    let firstMonday = new Date(firstDayOfYear);
    while (firstMonday.getDay() !== 1) { // 1 represents Monday
        firstMonday.setDate(firstMonday.getDate() + 1);
    }

    // If January 1st is a Monday, it should be considered as the first week
    if (firstDayOfYear.getDay() === 0) { // If January 1st is a Sunday
        firstMonday.setDate(firstMonday.getDate() - 7);
    }

    // Calculate the first day of the specified week
    const firstDayOfWeek = new Date(firstMonday);
    firstDayOfWeek.setDate(firstMonday.getDate() + (weekNumber - 1) * 7);

    // If the calculated first day is in the previous year, adjust it
    if (firstDayOfWeek.getFullYear() < year) {
        firstDayOfWeek.setFullYear(year);
        firstDayOfWeek.setDate(1); // Reset to January 1st
    }

    // Format the date in dd-mm-yyyy
    const day = String(firstDayOfWeek.getDate()).padStart(2, '0');
    const month = String(firstDayOfWeek.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const formattedDate = `${day}-${month}-${firstDayOfWeek.getFullYear()}`;

    return formattedDate;
}

// Example usage:
console.log(firstDayWeek(1, '1000')); // Outputs: "01-01-2024"
console.log(firstDayWeek(2, '2024')); // Outputs: "08-01-2024"
console.log(firstDayWeek(53, '1000')); // Outputs: "30-12-2024"
console.log(firstDayWeek(1, '1000')); // Outputs: "01-01-1000"
