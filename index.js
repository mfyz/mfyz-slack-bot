const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8112

const app = express()

app.get('/', function (req, res) {
	res.json({ title: 'Hey', message: 'Hello there!' })
})

app.get('/slack-events', function (req, res) {
	let payload = req.body;

	// payload.type
	// payload.token
 
	res.send(payload.challenge);
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))