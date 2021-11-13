import express = require("express")
const app: express.Express = express()
const port: string = process.env.PORT || "3000"
const userRouter = require("./router/userRouter")

app.use("/api/users", userRouter)
app.listen(port, () => console.log(`Listening on port ${port}...`))
