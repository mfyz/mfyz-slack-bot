const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8112

const app = express()

app.get('/', function (req, res) {
	res.json({ title: 'Hey', message: 'Hello there!' })
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))