import http from 'http';
import fs from 'fs';
import path from 'path';

// Define the port to listen on
const PORT = 5000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  console.log(`Received request: ${req.method} ${req.url}`);

  if (req.method !== 'GET') {
    res.writeHead(405, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const guestName = decodeURIComponent(req.url.slice(1));
  const filePath = path.join(__dirname, 'guests', `${guestName}.json`);

  fs.readFile(filePath, 'utf8', (err, data) => {
    console.log(`Reading file: ${filePath}`);
    if (err) {
      console.log(`Error reading file: ${err.message}`);
      if (err.code === 'ENOENT') {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ error: 'guest not found' }));
      } else {
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ error: 'server failed' }));
      }
    } else {
      console.log(`File content: ${data}`);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(data);
    }
  });
});

// Start the server and print a message indicating the port
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
