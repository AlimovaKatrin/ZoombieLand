const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const app = express();
app.use(cors())
app.use(express.json());
app.use(logger('dev'));

app.get('/',(req,res)=>res.send('hola'));

module.exports = app;
