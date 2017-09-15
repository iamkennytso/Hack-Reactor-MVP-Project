const express = require('express');
const cred = require('./cred')
const db = require('./db')
let app = express();

let port = 1203

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, function() {
	console.log(`<('.'<) Server's up on your birthday port!`);
})