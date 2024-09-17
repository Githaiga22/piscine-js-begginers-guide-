import fs from 'fs'

const input = process.argv[2]

const words = input.split(' ')

const verydisco = words.map((word) => {
  const middle = Math.ceil(word.length / 2)
  const firstHalf = word.slice(0, middle)
  const secondHalf = word.slice(middle)
  return secondHalf + firstHalf
})

const output = verydisco.join(' ')

fs.writeFile('verydisco-forever.txt', output, (err) => {
  if (err) {
    console.error('Error writing to file:', err)
  } else {
    console.log('Output written to verydisco-forever.txt')
  }
})