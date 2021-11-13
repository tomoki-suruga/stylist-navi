import express = require("express")
import { Transaction } from "sequelize/types"
import {
  DB_CONNECTION_ERROR,
  CREATE_USER_SUCCESSED,
  UPDATE_USER_SUCCESSED,
} from "../const/messages"
const db = require("../models/")
const getAllHandler = async (_: any, res: express.Response) => {
  await db.User.findAll()
    .then((users: any) => {
      res.json(users)
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
      res.json(user)
    })
    .catch((e: Error) => {
      console.log(e)
      console.log(DB_CONNECTION_ERROR)
      res.status(500).send(DB_CONNECTION_ERROR)
    })
}

const createHandler = async (req: express.Request, res: express.Response) => {
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
      .then((result: any) => {
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

const updateHandler = async (req: express.Request, res: express.Response) => {
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
      .then((result: any) => {
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
