// server.js
const WebSocket = require("ws");
const http = require("http");

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("✅ New client connected!");

  ws.on("message", (msg) => {
    try {
      const data = msg.toString();
      console.log("Received:", data);
      // Ví dụ gửi lại tin nhắn cho client
      ws.send(`Echo: ${data}`);
    } catch (err) {
      console.error("Error processing message:", err);
    }
  });

  ws.on("close", () => console.log("❌ Client disconnected"));
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`🌐 WebSocket server running on ${PORT}`));
