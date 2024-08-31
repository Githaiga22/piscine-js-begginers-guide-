// getURL: returns all URLs present in the dataSet
function getURL(params) {
    let regex = /(https?:\/\/[\w\/\S]+)/g;
    let x = params.match(regex);
    let y = [];
    y = x;
    return y;
}

// greedyQuery: returns URLs from the dataSet, with at least 3 query parameters.
function greedyQuery(dataSet) {
    const greedyQueryRegex = /https?:\/\/[^\s?]+(\?\S+)?/g;
    // Find all matches and return them as an array
    return (dataSet.match(greedyQueryRegex) || []).filter((url) => {
        // Count the number of query parameters
        const queryParams = url.split(/[&?]/).length - 1;
        return queryParams >= 3;
    });
}

// notSoGreedy: returns URLs from the dataSet, with at least 2, but not more than 3 query parameters.
function notSoGreedy(dataSet) {
    const notSoGreedyRegex = /https?:\/\/[^\s?]+(\?\S+)?/g;

    return (dataSet.match(notSoGreedyRegex) || []).filter((url) => {
        // Count the number of query parameters
        const queryParams = url.split(/[&?]/).length - 1;
        return queryParams >= 2 && queryParams < 4;
    });
}

console.log(notSoGreedy("https://192.168.1.123?something=nothing&pro=[23]"));
