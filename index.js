require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const handleEvents = require('./handle-events')

const PORT = process.env.PORT || 8112

const app = express()
app.use(bodyParser.json())

app.get('/', function (req, res) {
	res.send('Nothing here!')
})

app.all('/slack-events', function (req, res) {
	const payload = req.body;
	// console.log(payload);

	if (!payload.challenge && !payload.type) return res.status(400).send('Request is missing evnent dedails in the body!')

	handleEvents(payload)
 
	res.send(payload.challenge);
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
