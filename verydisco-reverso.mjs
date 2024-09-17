import { readFile } from 'fs'

const verydiscoReverso = (filename) => {
  readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`)
      return
    }

    const words = data.split(' ')
    const verydisco = words.map((word) => {
      const middle = Math.floor(word.length / 2)
      const firstHalf = word.slice(0, middle)
      const secondHalf = word.slice(middle)
      return secondHalf + firstHalf
    })

    console.log(verydisco.join(' '))
  })
}

const filename = process.argv[2]
verydiscoReverso(filename)