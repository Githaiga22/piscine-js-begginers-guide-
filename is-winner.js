"use strict";

async function isWinner(country) {
    let err = false
    const winningCountries = await db.getWinner(country).catch(() => err = true)
    if (err) return `${country} never was a winner`
    if (!winningCountries) return `${country} never was a winner`
    if (winningCountries.continent !== "Europe") return `${country} is not what we are looking for because of the continent`
    const winningResults = await db.getResults(winningCountries.id)
    if (winningResults.length < 3) return `${country} is not what we are looking for because of the number of times it was champion`
    let years = ""
    let results = ""
    for (const result of winningResults) {
        years += `${result.year}, `
        results += `${result.score}, `
    }
    return `${country} won the FIFA World Cup in ${years.slice(0, -2)} winning by ${results.slice(0, -2)}`
}