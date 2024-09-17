import { promises as fs } from 'fs';
import { resolve } from 'path';


//function to read the directory and count its entries

async function countDirectoryEntries(directory) {
    try {
        //read directories contents
        const entries = await fs.readdir(directory)
        //count and log the nummber of entries
        console.log(entries.length);
    } catch (err) {
        //handle errors eg if the directory does not exist
        console.error('Error reading directory:', err.message)
    }
}

//get the directory path from cmd
const directory = process.argv[2] ? resolve(process.argv[2]) : process.cwd()

countDirectoryEntries(directory)