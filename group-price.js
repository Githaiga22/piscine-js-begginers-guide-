function groupPrice(input) {
    const priceRegex = /([A-Z]{3})(\d+)\.(\d{2})/g;
    let matches;
    const result = [];

    while ((matches = priceRegex.exec(input)) !== null) {
        result.push([matches[0], matches[2], matches[3]]);
    }

    return result;
}
