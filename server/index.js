const express = require('express');
const cred = require('./cred')
const db = require('./db')
const bodyParser = require('body-parser')
const request = require('request')
const translatedStorage = require ('./leetedStorageModel')
let app = express();

let port = 1203

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())
app.listen(port, function() {
	console.log(`<('.'<) Server's up on your birthday port!`);
})

app.get('/recent5leeted', function(req,res){
	console.log('recent5leeted entered')
	translatedStorage.find( {}, (err, win) => {
		if(err) console.error('error', err);
		else console.log('win', win);
		res.send(win)
	}).limit(5).sort('-created_at')
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

	translatedStorage.create({leeted:'7357 Data cuz we need one more'}, (err)=> {
		if(err)console.log(err);
	});
	res.send('7357 Data')

    // request(options, function (error, response, body) {
	//   if (error){
	// 	console.error(error)
	//   } else {
	//     translatedStorage.create({leeted:'body.contents.translated'}, (err)=> {
	// 	     if(err)console.log(err);
	//     });
	//     res.send(body.contents.translated)
	//   }
    // });

})