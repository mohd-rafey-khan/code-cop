const mongoose = require('mongoose');

require('dotenv').config();

// conneting to database
mongoose.connect(process.env.DB, {useNewUrlParser: true}, () =>
{
    console.log('connected to db');
});