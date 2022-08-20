const express  = require('express');
app = express();
const bodyParser = require('body-parser');


/**
 * @inheritdoc
 * Configs
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
require('dotenv').config();
require('./config/mongoose');

/**
 * @inheritdoc
 * Handle all routes
 */
app.use('/api',require('./routes'));

/**
 * @inheritdoc
 * Server started
 */
app.listen(process.env.PORT,()=>{
    console.log("server started!");
})