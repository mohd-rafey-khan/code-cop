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

module.exports.login = async(req,res)=>{
    const exists_user = await User.findOne({email: req.body.email});
    if(!exists_user) return res.status(400).send("User not found");
    try{
    if(exists_user){
        const valid = await bcrypt.compare(req.body.password,exists_user.password);
        if(valid){
            const token = jwt.sign({_id: exists_user._id}, process.env.TOKEN_SECRET);
            res.header('auth-token', token).send(token);
        } 
        else return res.status(400).send("Password not matchd");
    }
    }
    catch(err){
        res.status(404).send(err);
    }
    

}


