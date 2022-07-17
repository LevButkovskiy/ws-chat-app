const Koa = require("koa")
const app = new Koa()

const PORT = 3002

const {Server} = require("socket.io")
const io = new Server(app)

// logger
app.use(async (ctx, next) => {
	await next()
	const rt = ctx.response.get("X-Response-Time")
	console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

// x-response-time
app.use(async (ctx, next) => {
	const start = Date.now()
	await next()
	const ms = Date.now() - start
	ctx.set("X-Response-Time", `${ms}ms`)
})

app.use(async (ctx) => {
	ctx.body = "Hello World 2"
})

io.on("connection", (socket) => {
	console.log("a user connected")
	socket.on("disconnect", () => {
		console.log("user disconnected")
	})
})

console.log("app started on ", PORT, "port")
app.listen(PORT)
