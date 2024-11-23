let io;
module.exports = {
  init: (httpServer) => {
    io = require("socket.io")(httpServer, {
      cors: {
        origin: "http://localhost:3000", // Replace with your front-end URL if different
        methods: ["GET", "POST", "PUT", "DELETE"],
      },
    });
    return io;
  },
  getIo: () => {
    if (!io) {
      throw new Error("Socket.io doesnt exist");
    }
    return io;
  },
};
