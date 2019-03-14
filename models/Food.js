const mongoose = require('mongoose')
// const md5 = require('md5')
const Schema = mongoose.Schema
const autopopulate = require('mongoose-autopopulate')

const Food = new Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: true
    }
    }, 
    {
        timestamps: true
    })



Food.plugin(autopopulate)
mongoose.model('Food', Food)