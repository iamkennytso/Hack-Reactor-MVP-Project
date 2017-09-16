const express = require('express');
const cred = require('./cred')
const db = require('./db')
const bodyParser = require('body-parser')
const request = require('request')
let app = express();

let port = 1203

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())
app.listen(port, function() {
	console.log(`<('.'<) Server's up on your birthday port!`);
})

app.post('/leetify', function(req, res){
	let plain = req.body.data

	var options = { method: 'POST',
    url: 'http://api.funtranslations.com/translate/leetspeak',
    headers: 
     { 'postman-token': '4bf5ad0d-b6f4-f9a4-411f-c97d1408d0ee',
     'cache-control': 'no-cache',
     'content-type': 'application/json' },
    body: { text: plain },
	json: true };
	
	//CHOOSE CAREFULLY YOU PLEB


	// res.send('fjeklwqfjklqewfeqw')
	

    request(options, function (error, response, body) {
	  if (error){
		console.error(error)
	  } else {
	    console.log('body', body.contents.translated);
	    res.send(body.contents.translated)
	  }
    });

})