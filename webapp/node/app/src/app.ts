import express = require("express")
import {
  DB_CONNECTION_ERROR,
  FAILED_REGISTER,
  NO_DATA,
  CREATE_USER_SUCCESSED,
  UPDATE_USER_SUCCESSED,
} from "./const/messages"
const db = require("./models/")
const app: express.Express = express()
const port: string = process.env.PORT || "3000"
const getRouter = express.Router()
const postRouter = express.Router()

getRouter.get("/api/users", async (_, res: express.Response) => {
  await db.User.findAll()
    .then((users: any) => {
      if (!users) {
        console.log(NO_DATA)
      } else {
        res.json(users)
      }
    })
    .catch((e: Error) => {
      console.log(e)
      console.log(DB_CONNECTION_ERROR)
      res.status(500).send(DB_CONNECTION_ERROR)
    })
})

getRouter.get(
  "/api/users/:id",
  async (req: express.Request, res: express.Response) => {
    await db.User.findByPk(req.params.id)
      .then((user: any) => {
        if (!user) {
          console.log(NO_DATA)
        } else {
          res.json(user)
        }
      })
      .catch((e: Error) => {
        console.log(e)
        console.log(DB_CONNECTION_ERROR)
        res.status(500).send(DB_CONNECTION_ERROR)
      })
  }
)

postRouter.use(express.json())
postRouter.post(
  "/api/users/create",
  async (req: express.Request, res: express.Response) => {
    const t = await db.sequelize.transaction()
    await db.sequelize.transaction({}, async (transaction: any) => {
      await db.User.create(
        {
          name: req.body.user.name,
          email: req.body.user.email,
        },
        { transaction: t }
      )
        .then((result: any) => {
          if (!result) {
            console.log(FAILED_REGISTER)
          } else {
            console.log(CREATE_USER_SUCCESSED)
            res.status(200).send(CREATE_USER_SUCCESSED)
          }
        })
        .catch((e: Error) => {
          console.log(e)
          console.log(DB_CONNECTION_ERROR)
          res.status(500).send(DB_CONNECTION_ERROR)
        })
    })
  }
)

postRouter.post(
  "/api/users/update",
  async (req: express.Request, res: express.Response) => {
    db.sequelize.transaction({}, async (transaction: any) => {
      await db.User.update(
        {
          name: req.body.user.name,
          email: req.body.user.email,
        },
        {
          transaction,
          where: {
            id: req.body.user.id,
          },
        }
      )
        .then((result: number) => {
          if (!result) {
            console.log(FAILED_REGISTER)
          } else {
            console.log(UPDATE_USER_SUCCESSED)
            res.status(200).send(UPDATE_USER_SUCCESSED)
          }
        })
        .catch((e: Error) => {
          console.log(e)
          console.log(DB_CONNECTION_ERROR)
          res.status(500).send(DB_CONNECTION_ERROR)
        })
    })
  }
)

app.use(getRouter)
app.use(postRouter)
app.listen(port, () => console.log(`Listening on port ${port}...`))
