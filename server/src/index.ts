import app from "./app";

const port = 3000; 

Bun.serve({
  port: port,
  fetch: app.fetch
});

console.log(`Server running on port: ${port}`)