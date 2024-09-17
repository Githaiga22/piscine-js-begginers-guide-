import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const PORT = 5000
const server = createServer(async (request, response) => {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const guestName = url.pathname.slice(1);
    response.setHeader('Content-Type', 'application/json');

    try {
        if (guestName) {
            const content = await readFile(`guests/${guestName}.json`, 'utf8');
            const jsonContent = JSON.parse(content);
            response.statusCode = 200;
            response.end(JSON.stringify(jsonContent));
        } else {
            response.statusCode = 404;
            response.end(JSON.stringify({ error: "guest not found" }));
        }
    } catch (error) {
        if (error.code === 'ENOENT') {
            response.statusCode = 404;
            response.end(JSON.stringify({ error: "guest not found" }));
        } else {
            response.statusCode = 500;
            response.end(JSON.stringify({ error: "server failed" }));
        }
    }
});

server.listen(PORT, () => {
    console.log('Server listening on port localhost:5000!');
});