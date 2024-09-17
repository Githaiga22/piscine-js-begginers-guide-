import { promises as fs } from 'fs'; // Correctly import fs promises
import path from 'path'; // Import path module

// Function to encode or decode a file
async function processFile(inputPath, action, outputFileName) {
    try {
        // Read the content of the input file
        const data = await fs.readFile(inputPath);
        
        let result;
        
        if (action === 'encode') {
            // Encode the file content to Base64
            result = data.toString('base64');
            outputFileName = outputFileName || 'cypher.txt';
        } else if (action === 'decode') {
            // Decode the Base64 content
            result = Buffer.from(data, 'base64').toString('utf8');
            outputFileName = outputFileName || 'clear.txt';
        } else {
            throw new Error('Invalid action. Use "encode" or "decode".');
        }
        
        // Write the result to the specified output file
        await fs.writeFile(outputFileName, result, 'utf8');
        console.log(`File processed successfully. Output saved to ${outputFileName}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Get command-line arguments
const [,, inputPath, action, outputFileName] = process.argv;

// Ensure the inputPath and action are provided
if (!inputPath || !action) {
    console.error('Usage: node tell-it-cypher.mjs <inputFile> <encode|decode> [outputFileName]');
    process.exit(1);
}

// Process the file based on the action
processFile(inputPath, action, outputFileName);
