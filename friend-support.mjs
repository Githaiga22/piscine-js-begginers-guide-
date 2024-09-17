import http from 'http';
import fs from 'fs';
import path from 'path';

// Define the port to listen on
const PORT = 5000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Log the incoming request method and URL
  console.log(`Received request: ${req.method} ${req.url}`);

  // Only handle GET requests
  if (req.method !== 'GET') {
    res.writeHead(405, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  // Extract the guest name from the URL
  const guestName = decodeURIComponent(req.url.slice(1));
  const filePath = path.join(__dirname, 'guests', `${guestName}.json`);

  // Attempt to read the requested file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ error: 'guest not found' }));
      } else {
        // Server error
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ error: 'server failed' }));
      }
    } else {
      // File found, respond with JSON content
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(data);
    }
  });
});

// Start the server and print a message indicating the port
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
