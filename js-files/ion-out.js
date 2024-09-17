const regex = /\b(\w*?t)ion\b/g;
// \b : match beginiing of word
// \w* : match zero or more word characters
// (\w*?t) : match sequaence ending with 't'
// ion\b : match 'ion' as end of a word
function ionOut(str) {
    const matches = [];
    let match;
    while ((match = regex.exec(str)) !== null) {
        matches.push(match[1]);
    }
    return matches;
}