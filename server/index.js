const express = require('express');
const cred = require('./cred')
const db = require('./db')
let app = express();

let port = 1203

app.get('/', (req, res)=>{
	res.render('index');
});

app.listen(port, function() {
	console.log(`<('.'<) Server's up on your birthday port!`);
})