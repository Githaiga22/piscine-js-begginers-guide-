function findIP(input) {
    // Regular expression to match valid IP addresses with optional ports
    const ipRegex = /\b(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(?::(?:[1-9]\d{0,3}|[1-5]\d{4}|6(?:[0-4]\d{3}|5(?:[0-4]\d{2}|5(?:[0-2]\d|3[0-5]))))?)?\b/g;

    const result = [];
    let match;

    while ((match = ipRegex.exec(input)) !== null) {
        let [ip, port] = match[0].split(':');
        
        // Check for leading zeros
        if (ip.split('.').some(octet => octet.length > 1 && octet.startsWith('0'))) {
            continue;
        }

        // If port is undefined or valid, add to result
        if (!port || (parseInt(port) >= 0 && parseInt(port) <= 65535)) {
            result.push(match[0]);
        }
    }

    return result;
}