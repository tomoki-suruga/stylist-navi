import express = require("express")
import {
  DB_CONNECTION_ERROR,
  FAILED_REGISTER,
  NO_DATA,
  CREATE_USER_SUCCESSED,
  UPDATE_USER_SUCCESSED,
} from "../const/messages"
const db = require("../models/")

const getAllHandler = async (_: any, res: express.Response) => {
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
}

const getHandler = async (req: express.Request, res: express.Response) => {
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

const createHandler = async (req: express.Request, res: express.Response) => {
  await db.sequelize.transaction({}, async (transaction: any) => {
    console.log(req.body.user.name)
    console.log(req.body.user.email)
    await db.User.create(
      {
        name: req.body.user.name,
        email: req.body.user.email,
      },
      { transaction }
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

const updateHandler = async (req: express.Request, res: express.Response) => {
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

module.exports = {
  getAllHandler: getAllHandler,
  getHandler: getHandler,
  createHandler: createHandler,
  updateHandler: updateHandler,
}
