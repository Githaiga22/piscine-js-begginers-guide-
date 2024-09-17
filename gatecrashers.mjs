import http from 'http';
import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = 5000;
const AUTHORIZED_USERS = ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'];
const PASSWORD = 'abracadabra';
const GUESTS_DIR = 'guests';

const server = http.createServer(async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !isAuthorized(authHeader)) {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Authorization Required' }));
    return;
  }

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const guestData = JSON.parse(body);
        const guestName = req.url.slice(1);
        const guestsPath = join(__dirname, GUESTS_DIR);
        const filePath = join(guestsPath, `${guestName}.json`);

        await fs.mkdir(guestsPath, { recursive: true });

        await fs.writeFile(filePath, JSON.stringify(guestData, null, 2));

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(guestData));
      } catch (error) {
        console.error('Error writing guest data:', error);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON data' }));
      }
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
  }
});

function isAuthorized(authHeader) {
  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  return AUTHORIZED_USERS.includes(username) && password === PASSWORD;
}

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { server };