function firstDayWeek(weekNumber, year) {
 
    if (weekNumber < 1 || weekNumber > 53 || !/^\d{4}$/.test(year)) {
        return 'Invalid input';
    }

    
    const startDate = new Date(`${year}-01-01`);
    
    
    const startDay = startDate.getDay();
    
   
    let dayOffset = (1 - startDay + 7) % 7;
    if (weekNumber === 1) {
        
        startDate.setDate(startDate.getDate() + dayOffset);
        return formatDate(startDate);
    }

    
    const weekOffset = (weekNumber - 1) * 7;
    startDate.setDate(startDate.getDate() + dayOffset + weekOffset);
    
   
    if (startDate.getFullYear() < year) {
        
        startDate.setDate(1);
        startDate.setMonth(0); 
        return formatDate(startDate);
    }

   
    return formatDate(startDate);
}

function formatDate(date) {
   
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}


console.log(firstDayWeek(1, '2024')); 
console.log(firstDayWeek(2, '2024'));
console.log(firstDayWeek(53, '2024')); 
