/**
 * Basic HTTP Server using Node.js Core 'http' Module
 * Web Dev III (Node.js & Express Backend) - Lab Assignment 1
 * 
 * Description:
 * A lightweight HTTP server built with the core 'http' module.
 * Serves multiple routes: '/', '/about', '/contact', and handles 404 Not Found.
 */

const http = require('http');
const logger = require('./modules/logger');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // Extract url pathname ignoring query parameters and trailing slashes
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname.replace(/\/+$/, '') || '/';
    const method = req.method;

    logger.info(`Incoming Request: ${method} ${pathname}`);

    // Set common headers
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    switch (pathname) {
        case '/':
            res.writeHead(200);
            res.end("Welcome to Node Server\n");
            break;

        case '/about':
            res.writeHead(200);
            res.end("About Page\n");
            break;

        case '/contact':
            res.writeHead(200);
            res.end("Contact Page\n");
            break;

        default:
            res.writeHead(404);
            res.end("404 Error Message: Page Not Found\n");
            logger.warn(`404 Not Found for route: ${pathname}`);
            break;
    }
});

server.listen(PORT, () => {
    logger.success(`Server is running at http://localhost:${PORT}/`);
    console.log("\nAvailable Routes to Visit:");
    console.log(`  Visit: http://localhost:${PORT}/        -> Response: Welcome to Node Server`);
    console.log(`  Visit: http://localhost:${PORT}/about   -> Response: About Page`);
    console.log(`  Visit: http://localhost:${PORT}/contact -> Response: Contact Page`);
    console.log("\nPress Ctrl + C to stop the server.\n");
});

module.exports = server;
