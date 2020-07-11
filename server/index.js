const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');

mongoose.connect(config.database, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err)
        console.log(err);
    else 
        console.log('Db connected');
});

const app = express();

const PORT = process.env.port || config.port;

app.listen(PORT, ()=> {
    console.log('server listen on port ', PORT);
});

app.get('/rentals', (req, res) => {
   res.json({'success' : true});
});