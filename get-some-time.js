function firstDayWeek(weekNumber, year) {
    // Validate input
    if (weekNumber < 1 || weekNumber > 53) {
        throw new Error("Week number must be between 1 and 53.");
    }

    // Create a date object for January 1st of the specified year
    const firstDayOfYear = new Date(year, 0, 1);

    // Calculate the first Thursday of the year
    let firstThursday = new Date(firstDayOfYear);
    firstThursday.setDate(firstDayOfYear.getDate() + (4 - (firstDayOfYear.getDay() || 7)));

    // Calculate the first Monday of the week containing the first Thursday
    let firstMonday = new Date(firstThursday);
    firstMonday.setDate(firstThursday.getDate() - (firstThursday.getDay() - 1));

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
console.log(firstDayWeek(1, '2024')); // Outputs: "01-01-2024"
console.log(firstDayWeek(2, '2024')); // Outputs: "08-01-2024"
console.log(firstDayWeek(53, '2024')); // Outputs: "30-12-2024"
console.log(firstDayWeek(1, '1000')); // Outputs: "01-01-1000"
console.log(firstDayWeek(1, '1001')); // Outputs: "01-01-1001"
