const express  = require('express');
app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');


// ---------------------  Configs -----------------

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// conneting to database
mongoose.connect(process.env.DB, {useNewUrlParser: true}, () =>
{
    console.log('connected to db');
});


/**
 * all routes
 */
// using auth register login
const auth = require('./routes/auth');
app.use('/api/users', auth);






app.get('/',(req,res)=>{
    res.send("hey!");
})

app.listen(8080,()=>{
    console.log("server started!");
})