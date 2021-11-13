import express from "express"
import { userHandler } from "../handler/userHandler"

const userRouter = express.Router()

userRouter.use(express.json())

userRouter.get("/", userHandler.getAllHandler)

userRouter.get("/:id", userHandler.getHandler)

userRouter.post("/create", userHandler.createHandler)

userRouter.post("/update", userHandler.updateHandler)

export { userRouter }
