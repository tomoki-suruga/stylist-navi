import { Request, Response } from "express"
import { Transaction } from "sequelize/types"
import { Users } from "../type/Users"
import {
  DB_CONNECTION_ERROR,
  CREATE_USER_SUCCESSED,
  UPDATE_USER_SUCCESSED,
} from "../const/messages"
const db = require("../models/")
const getAllHandler = async (_: any, res: Response) => {
  await db.User.findAll()
    .then((users: Users) => {
      res.json(users)
    })
    .catch((e: Error) => {
      console.log(e)
      console.log(DB_CONNECTION_ERROR)
      res.status(500).send(DB_CONNECTION_ERROR)
    })
}

const getHandler = async (req: Request, res: Response) => {
  await db.User.findByPk(req.params.id)
    .then((user: Users) => {
      res.json(user)
    })
    .catch((e: Error) => {
      console.log(e)
      console.log(DB_CONNECTION_ERROR)
      res.status(500).send(DB_CONNECTION_ERROR)
    })
}

const createHandler = async (req: Request, res: Response) => {
  await db.sequelize.transaction({}, async (transaction: Transaction) => {
    console.log(req.body.user.name)
    console.log(req.body.user.email)
    await db.User.create(
      {
        name: req.body.user.name,
        email: req.body.user.email,
      },
      { transaction }
    )
      .then((result: Users) => {
        console.log(CREATE_USER_SUCCESSED)
        res.status(200).send(result)
      })
      .catch((e: Error) => {
        console.log(e)
        console.log(DB_CONNECTION_ERROR)
        res.status(500).send(DB_CONNECTION_ERROR)
      })
  })
}

const updateHandler = async (req: Request, res: Response) => {
  db.sequelize.transaction({}, async (transaction: Transaction) => {
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
        console.log(UPDATE_USER_SUCCESSED)
        res.status(200).send(result)
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
