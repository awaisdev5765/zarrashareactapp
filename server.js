// server.js
const { createServer } = require('http');
const next = require('next');
const path = require('path');

// Detect production mode
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: path.join(__dirname) });
const handle = app.getRequestHandler();

// Define port (cPanel will usually assign a custom port)
const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => {
    // Handle all requests with Next.js
    handle(req, res);
  }).listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Server running on http://localhost:${PORT}`);
  });
});
