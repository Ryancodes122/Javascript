const express = require('express')

const port = 3000
const app = express();

app.get('/', function(req, res) {
  res.send('How are you brother');
})


app.listen(port)
