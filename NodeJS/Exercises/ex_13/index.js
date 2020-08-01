const express = require('express');
const port = 3000;
const app = express();

var home = require('./home')
var user = require('./user')

app.use('/', home)
app.use('/user', user)

app.listen(port);