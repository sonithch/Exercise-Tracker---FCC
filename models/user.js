const mongo = require('mongodb');
const mongoose = require('mongoose')
mongoose.connect(process.env.MLAB_URI)


var userSchema = new mongoose.Schema({
  "_id": {type:String, required: true, unique: true},
  "username": {type:String, required: true, unique: true}
})

module.exports = mongoose.model('userEntry', userSchema)