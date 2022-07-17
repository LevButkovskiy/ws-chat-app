const {Server} = require("socket.io")

const io = new Server(8080, {
	cors: {
		origin: "*",
	},
})

io.on("connection", (socket) => {
	// send a message to the client
	socket.emit("hello from server", 1, "2", {3: Buffer.from([4])})

	// receive a message from the client
	socket.on("hello from client", (...args) => {
		console.log(args)
	})
})
