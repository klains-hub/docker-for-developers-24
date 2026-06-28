// Minimal course app — no external dependencies on purpose.
// Reads configuration from the environment (12-factor style).
const http = require('http');

const PORT      = process.env.PORT      || 3000;
const APP_ENV   = process.env.APP_ENV   || 'development';
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';

console.log('[startup] course-app starting');
console.log(`[startup] APP_ENV=${APP_ENV} LOG_LEVEL=${LOG_LEVEL} PORT=${PORT}`);

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', env: APP_ENV }));
    return;
  }
  if (LOG_LEVEL === 'debug') {
    console.log(`[debug] ${req.method} ${req.url}`);
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<h1>Course App</h1><p>Environment: <b>${APP_ENV}</b></p>`);
});

// Bind 0.0.0.0 so the container is reachable through a published port.
server.listen(PORT, '0.0.0.0', () => {
  console.log(`[startup] listening on 0.0.0.0:${PORT}`);
});
