const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello BEAM boys!');
});

app.listen(5000,"127.0.0.1");





