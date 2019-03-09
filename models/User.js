const mongoose = require('mongoose')
const md5 = require('md5')
const Schema = mongoose.Schema
const autopopulate = require('mongoose-autopopulate')

const User = new Schema({
  nome: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
})

User.methods.checkPassword = function (senha) {
  let resut = this.senha === md5(senha)
  return resut
}

User.methods.hashPassword = function (senha) {
  return md5(senha)
}

User.plugin(autopopulate)
mongoose.model('User', User)