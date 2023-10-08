import express from 'express';
import bodyParser from 'body-parser';
import userController from './Users/UserController';

const app = express()

app.use(bodyParser.json())
app.use('/user', userController)
app.use('/sheet', userController)

app.get('/', (req, res) => {
	res.contentType("application/json")
  res.send('Hello World!')
})

app.listen(3005)

export default app;