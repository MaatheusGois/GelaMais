const mongoose = require('mongoose')
const Schema = mongoose.Schema
const autopopulate = require('mongoose-autopopulate')

const Ocorrencia = new Schema({
  localizacao: {
    lat: String,
    lng: String
  },
  categoria: String,
  subcategoria: String,
  likes: Number,
  dislikes: Number
}, {
    timestamps: true
  })


Ocorrencia.plugin(autopopulate)
mongoose.model('Ocorrencia', Ocorrencia)