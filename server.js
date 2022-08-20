const express  = require('express');
app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const User = require('./models/User');
const mongoose = require('./config/mongoose');

// ---------------------  Configs -----------------

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());





/**
 * all routes
 */
// using auth register login


app.use('/',require('./routes'));






app.listen(process.env.PORT,()=>{
    console.log("server started!");
})