const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");

app.use(bodyParser.json());
app.use(cookieParser());

app.post('/createaccount', (req, res) => {
  res.send('Hello BEAM boys!');
});

app.post('/login', (req, res) => {
  res.send('Hello BEAM boys!');
});

app.post('/logout',verifyToken, (req, res) => {
  res.send('Hello BEAM boys!');
});

app.post('/searchcolleges',verifyToken, (req, res) => {
  res.send('Hello BEAM boys!');
});

app.post('/scrapecolleges',verifyToken,(req, res) => {
  res.send('Hello BEAM boys!');
});

function verifyToken(req,res,next) {
  let token = req.cookies['token'];
  if(!token){ 
      res.status(400);
      res.json({status: 'error', error: 'User not logged in'});
  }
  else{
      req.token = token;
      next();
  }
}

app.listen(5000,"127.0.0.1");





