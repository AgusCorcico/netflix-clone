const { Router } = require('express')
const router = Router();
const User = require('../models/User');
const CryptoJS = require("crypto-js");
const verify = require('../verifyToken');


router.put('/:id', verify, async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body, //con $Set actualizo los datos del usuario con lo enviado por body
            },{ new: true});//new:true es para que me actualice la respuesta despues de haber hecho el update.
            res.status(200).send(updateUser)
        } catch (err) {
            res.status(500).json(err);
        }
    }else{
        res.status(403).json('You can update only your account')
    }
});

router.delete('/:id', verify, async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        try {
            const deleteUser = await User.findByIdAndDelete(req.params.id)
            res.status(200).send('User deleted successfully')
        } catch (err) {
            res.status(500).json(err);
        }
    }else{
        res.status(403).json('You can delete only your account')
    }
});

router.get('/find/:id', async (req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        const {password, ...info} = user._doc;
        res.status(200).send(info);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', verify, async (req,res)=>{
    const query = req.query.new;

    if(req.user.isAdmin){
        try {
            const users = query ? await User.find().sort({_id:-1}).limit(10) : await User.find()// si quiero solo los nuevos usuarios, este metodo me trae los ultimos 50
            res.status(200).send(users)
        } catch (err) {
            res.status(500).json(err);
        }
    }else{
        res.status(403).json('You are not an admin, sorry')
    }
});




module.exports = router;