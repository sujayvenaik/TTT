const express = require('express');
var api = require('./api');

const app = express();

app.get('/getData', (req, res) => {
  
  api(req.query.input, function (err, topRecord){
    res.send(topRecord);
  })
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);