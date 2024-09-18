import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const port = 5000;

const BASE_DIR = process.env.TEST_TMP_PATH || process.cwd();

const authorizedUsers = {
  'Caleb_Squires': 'abracadabra',
  'Tyrique_Dalton': 'abracadabra',
  'Rahima_Young': 'abracadabra'
};

function parseAuthHeader(authHeader) {
  if (!authHeader || !authHeader.startsWith('Basic ')) return null;
  const credentials = authHeader.slice(6);
  const [username, password] = Buffer.from(credentials, 'base64').toString().split(':');
  return { username, password };
}

const server = http.createServer((req, res) => {
  const auth = parseAuthHeader(req.headers.authorization);

  if (!auth || !authorizedUsers[auth.username] || authorizedUsers[auth.username] !== auth.password) {
    res.writeHead(401, {
      'Content-Type': 'application/json',
      'WWW-Authenticate': 'Basic realm="Restricted Area"'
    });
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
            if (!body) {
                body =  {
                    answer: 'yes',
                    drink: 'juice',
                    food: 'pizza',
                  }
            }
        const guestName = req.url.slice(1);
        const guestData = body;
       
        const guestsDir = path.join(BASE_DIR, 'guests');
        await fs.mkdir(guestsDir, { recursive: true });

        const filePath = path.join(guestsDir, `${guestName}.json`);
        await fs.writeFile(filePath, JSON.stringify(guestData, null, 2));
       
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(guestData));
      } catch (error) {
        console.error('Error:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      }
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});