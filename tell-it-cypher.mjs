import { promises as fs } from 'fs'

async function transformData(filePath, action, newFile) {
  try {
    const content = await fs.readFile(filePath, 'utf8')
    let processedOutput

    if (action === 'encode') {
      processedOutput = Buffer.from(content).toString('base64')
    } else if (action === 'decode') {
      processedOutput = Buffer.from(content, 'base64').toString('utf8')
    } else {
      throw new Error('Invalid action. Use "encode" or "decode".')
    }

    const newFilePath = newFile ? newFile : action === 'encode' 
        ? 'cypher.txt'
        : 'clear.txt'
    await fs.writeFile(newFilePath, processedOutput, 'utf8')
    console.log(`File processed and saved as ${newFilePath}`)
  } catch (error) {
    console.error('Error processing the file:', error.message)
  }
}

const [filePath, action, newFile] = process.argv.slice(2)

if (!filePath || !action) {
  console.error(
    'No file path or action (encode/decode) provided!',
  )
  process.exit(1)
}

transformData(filePath, action, newFile)