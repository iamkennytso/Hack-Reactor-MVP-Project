const cred = require('./cred')
const mongoose = require('mongoose');
const MongoClient = require('mongodb')

mongoose.connect(`mongodb://testuser:testtest@ds135534.mlab.com:35534/hackreactormvp`, (err, win) => {
	if(err){
		console.error(`Error connecting: ${err}`)
	} else {
		console.log(`WE IN ALL THE DATABASES BABYYYYYYY (>'.')>`) 
	}
});

var db = mongoose.connection;

module.exports = db;