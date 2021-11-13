import express from "express"
import { userRouter } from "./router/userRouter"
const app: express.Express = express()
const port: string = process.env.PORT || "3000"

app.use("/api/users", userRouter)
app.listen(port, () => console.log(`Listening on port ${port}...`))
