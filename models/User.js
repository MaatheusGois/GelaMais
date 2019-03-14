const mongoose = require('mongoose')
// const md5 = require('md5')
const Schema = mongoose.Schema
const autopopulate = require('mongoose-autopopulate')

const User = new Schema({
  tia: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
  // ,
  // photo: {
  //   type: String,
  //   required: true
  // }
  ,
  sheriff: {
    type: Boolean,
    required: true
  }
})



User.plugin(autopopulate)
mongoose.model('User', User)