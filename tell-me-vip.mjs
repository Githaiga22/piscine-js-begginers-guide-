import { promises as fs } from 'fs'
import path from 'path'

async function getVip(inputPath) {
  try {
    const files = await fs.readdir(inputPath)
    const guests = []

    for (const file of files) {
      const filePath = path.join(inputPath, file)
      const content = JSON.parse(await fs.readFile(filePath, 'utf8'))

      if (content.answer.toLowerCase() === 'yes') {
        const [lastName, firstName] = file.split('.')[0].split('_')
        guests.push(`${firstName} ${lastName}`)
      }
    }

    guests.sort()

    const formattedGuests = guests.map(
      (guest, index) => `${index + 1}. ${guest}`,
    )

    const vipList = formattedGuests.join('\n')
    await fs.writeFile('vip.txt', vipList, 'utf8')
    return vipList
  } catch (error) {
    console.error('Error processing the guest files:', error.message)
  }
}

const inputPath = process.argv[2]

if (!inputPath) {
  console.error('No directory path provided!')
  process.exit(1)
}

getVip(inputPath).then((result) => {
  if (result) {
    console.log(result)
  }
})