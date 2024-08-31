function findIP(input) {
    // Regular expression to match valid IP addresses with optional ports
    const ipRegex = /\b((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(?::([0-9]{1,5}))?\b/g;
    let matches;
    const result = [];
    
    while ((matches = ipRegex.exec(input)) !== null) {
        const ipAddress = matches[0]; // Full IP address including port if present
        const port = matches[5]; // Port capturing group
        
        // Check if the port is valid or undefined
        if (port === undefined || (parseInt(port) >= 0 && parseInt(port) <= 65535)) {
            result.push(ipAddress);
        }
    }
    
    return result;
}
