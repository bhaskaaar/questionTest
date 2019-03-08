var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
    title:String,
    type:String,
    description:String,
    options:[],
    correct:String
});

module.exports = mongoose.model('question',questionSchema);