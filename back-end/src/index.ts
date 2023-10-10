import express from 'express';
import bodyParser from 'body-parser';
import userController from './Users/UserController';
import cors from "cors";
import { NextFunction, Request, Response } from "express";
import SheetController from './Sheet/SheetController';

const app = express()
app.use("*", cors())

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  res.on('finish', () => {
    console.log(`${req.method} ${req.originalUrl} --> ${res.statusCode}`)
  })
  next()
}

app.use(requestLogger)

app.use(bodyParser.json())
app.use('/user', userController)
app.use('/sheets', SheetController)

app.get('/', (req, res) => {
	res.contentType("application/json")
  res.send('Hello World!')
})

app.listen(3005)

export default app;