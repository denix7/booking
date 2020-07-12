const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');

mongoose.connect(config.database, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err)
        console.log(err);
    else
    {
        const fakeDb = new FakeDb();
        fakeDb.seedDb();
        console.log('Db connected');
    }
});

const app = express();

const PORT = process.env.port || config.port;

app.listen(PORT, ()=> {
    console.log('server listen on port ', PORT);
});

app.get('/rentals', (req, res) => {
   res.json({'success' : true});
});