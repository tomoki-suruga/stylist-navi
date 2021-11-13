import express = require("express")

const handler = require("../handler/userHandler")
const router = express.Router()

router.use(express.json())

router.get("/", handler.getAllHandler)

router.get("/:id", handler.getHandler)

router.post("/create", handler.createHandler)

router.post("/update", handler.updateHandler)

module.exports = router
