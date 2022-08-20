const mongoose = require('mongoose');
require('dotenv').config();

/**
 * @inheritdoc
 * Connecting to server
 */
mongoose.connect(process.env.DB, {useNewUrlParser: true}, () =>
{
    console.log('connected to db');
});