var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const User = mongoose.model('User')
const Ocorrencia = mongoose.model('Ocorrencia')


/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Api Funcionando!');
});

router.post('/register', async function (req, res, next) {
    try {
        let novoUsuario = new User(req.body)
        novoUsuario.senha = novoUsuario.hashPassword(novoUsuario.senha)
        await novoUsuario.save()
        res.json({ resposta: true })
    } catch (err) {
        console.log('Error: ', err)
        res.json({ resposta: false })
    }
});

router.post('/login', async function (req, res, next) {
    let email = req.body.email
    let senha = req.body.senha

    try {
        let user = await User.findOne({
            email: email
        }).exec()
        if (user && user.checkPassword(senha)) {
            res.json(user)
        } else {
            res.json(false)
        }
    } catch (err) {
        res.json(false)
    }
});

router.post('/ocorrencia', async (req, res, next) => {
    try {
        console.log("here")
        let novaOcorrencia = new Ocorrencia(req.body)

        await novaOcorrencia.save()
        res.json({ resposta: 'Gravado com Sucesso!' })

    } catch (err) {
        console.log('Error: ', err)
        res.json({ resposta: false })

    }
})

router.get('/ocorrencias', async (req, res, next) => {
    try {
        let ocorrencias = await Ocorrencia.find({})
        res.json(ocorrencias)

    } catch (err) {
        console.log('Error: ', err)
        res.json({ resposta: false })

    }
})

module.exports = router;


