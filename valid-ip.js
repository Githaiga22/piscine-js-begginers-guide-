function findIP(input) {
    // Regular expression to match valid IP addresses with optional ports
    const ipRegex = /\b((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(?::([0-9]{1,5}))?\b/g;
    let matches;
    const result = [];

    while ((matches = ipRegex.exec(input)) !== null) {
        const port = matches[4];
        if (port === undefined || (port >= 0 && port <= 65535)) {
            result.push(matches[0]);
        }
    }

    return result;
}