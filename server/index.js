const express = require('express');

const app = express();

const PORT = process.env.port || 3000;

app.listen(PORT, ()=> {
    console.log('server on');
});

app.get('/rentals', (req, res) => {
   res.json({'success' : true});
});