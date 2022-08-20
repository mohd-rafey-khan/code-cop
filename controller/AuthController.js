const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports.register = async (req,res)=>{
    const exists = await User.findOne({email: req.body.email});
    if(exists) return res.status(400).send('Email already exists');

    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(req.body.password, salt);
    const user = new User({
        name: req.body.name, 
        email: req.body.email,
        password: hash
    });
    try {
        const savedUser = await user.save();
        const token = jwt.sign({_id: savedUser._id}, process.env.TOKEN_SECRET);
        res.header('auth-token', token).send(token);
    } catch(err){
        res.send(400).send(err);
    }
}


