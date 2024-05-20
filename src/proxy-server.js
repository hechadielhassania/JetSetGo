const cors_proxy = require('cors-anywhere');

// Configure the proxy server
const host = 'localhost';
const port = 8080; // Choose any available port

cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
}).listen(port, host, () => {
  console.log(`CORS Anywhere proxy server running on http://${host}:${port}`);
});
