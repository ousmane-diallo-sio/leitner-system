import express from 'express';

const app = express()

app.get('/', (req, res) => {
	res.contentType("application/json")
  res.send('Hello World!')
})

app.listen(3005)