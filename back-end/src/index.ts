import express from 'express';
import bodyParser from 'body-parser';
import userController from './Users/UserController';
import cors from "cors";

const app = express()
app.use("*", cors())

app.use(bodyParser.json())
app.use('/user', userController)

app.get('/', (req, res) => {
	res.contentType("application/json")
  res.send('Hello World!')
})

app.listen(3005)

export default app;