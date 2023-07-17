const Hocuspocus = require("@hocuspocus/server");

// Configure the server and create a new instance
const server = new Hocuspocus({
  port: 1234, // Change this port number as needed
});

// Run the WebSocket server
server.listen();
