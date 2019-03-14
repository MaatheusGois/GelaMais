var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const User = mongoose.model('User')
const Food = mongoose.model('Food')
// const Aluno = mongoose.model('Aluno')


/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Api Funcionando!');
});

router.post('/register', async function (req, res, next) {
    try {
        let novoUsuario = new User(req.body)
        await novoUsuario.save()
        res.json(true)
    } catch (err) {
        console.log('Error: ', err)
        res.json(false)
    }
});

router.post('/login', async function (req, res, next) {
    let tia = req.body.tia
    // let senha = req.body.senha

    try {
        let user = await User.findOne({ tia }).exec()
        if (user) {
            res.json(user)
        } else {
            res.json(false)
        }
    } catch (err) {
        res.json(false)
    }
});

router.put('/sheriff/:tia', async (req, res, next) => {
    try {
        console.log("here")
        let tia = req.params.tia

        if (tia) {
            let oldSheriff = await User.findOne({ sheriff: true }).exec()
            oldSheriff.sheriff = false
            let sheriff = await User.findOne({ tia }).exec()
            sheriff.sheriff = true
            await oldSheriff.save()
            await sheriff.save()
            res.json(true)
        }
        else {
            res.json(false)
        }

    } catch (err) {
        console.log('Error: ', err)
        res.json(false)

    }
})

router.get('/sheriff', async (req, res, next) => {
    try {
        let sheriff = await User.findOne({ sheriff: true }).exec()
        res.json(sheriff)

    } catch (err) {
        console.log('Error: ', err)
        res.json(false)

    }
})


router.get('/food', async (req, res, next) => {
    try {
        let food = await Food.find()
        res.json(food)

    } catch (err) {
        console.log('Error: ', err)
        res.json(false)
    }
})


router.post('/food', async (req, res, next) => {
    try {

        let user = await User.findOne({ tia: req.body.tia }).exec()

        let body = {
            name: req.body.name,
            owner: user._id
        }

        let newFood = new Food(body)

        await newFood.save()

        res.json(true)

    } catch (err) {
        console.log('Error: ', err)
        res.json(false)
    }
})


router.delete('/food', async (req, res, next) => {
    try {
        let idFood = req.body._id
        await Food.findByIdAndRemove(idFood)

        res.json(true)

    } catch (err) {
        console.log('Error: ', err)
        res.json(false)
    }
})


module.exports = router;


