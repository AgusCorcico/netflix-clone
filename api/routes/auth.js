const { Router } = require("express");
const router = Router();
const User = require('../models/User');
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');


router.post("/register", async (req,res)=>{
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
    
});

router.post('/login', async (req,res)=>{
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        !user && res.status(404).json('Incorrect password o username. Are you registered?');
        const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password && res.status(404).json('Incorrect password o username.');

        const accessToken = jwt.sign(
            {id:user._id, isAdmin: user.isAdmin},
            process.env.SECRET_KEY,
            {expiresIn :'10d'}
        );

        const {password, ...info} = user._doc  //para que el response no tenga la contraseña
        res.status(200).send({...info, accessToken});
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;
