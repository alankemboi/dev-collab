import { Hocuspocus } from "@hocuspocus/server";

// Configure the server and create a new instance
const server = new Hocuspocus({
  port: 1234, // Change this port number as needed
});

// Run the WebSocket server
server.listen();
console.log("WS started");

// Export an empty handler since the WebSocket server is running internally
export default function handler(req: any, res: any) {
  res.status(200).json({ status: "WebSocket server is running" });
}
