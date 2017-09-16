var mongoose = require('mongoose')

var translatedStorageSchema = mongoose.Schema(
    {leeted: String},
    {timestamps: {type: Date, createdAt: 'created_at' } }
);


var translatedStorage = mongoose.model('TranslatedStorage', translatedStorageSchema);

module.exports = translatedStorage;