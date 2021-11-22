const app = require("./app");
const config = require("./config");

const server = app.listen(config.port, () => {
  console.log(`🚀 Running on http://localhost:${config.port}`);
});

function gracefulShutdown() {
  console.debug("SIGTERM/SIGINT signal received: closing HTTP server");
  server.close(() => {
    console.debug("HTTP server closed");
  });
}

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);
