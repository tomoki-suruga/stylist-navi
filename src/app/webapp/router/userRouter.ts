import express = require("express")

const handler = require("../handler/userHandler")
const router = express.Router()

router.get("/", handler.getAllHandler)

router.get("/:id", handler.getHandler)

router.use(express.json())
router.post("/create", handler.createHandler)

router.post("/update", handler.updateHandler)

module.exports = router
