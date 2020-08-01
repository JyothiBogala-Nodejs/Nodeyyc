const express = require('express');
const port = 3000;
const app = express();

var options = {
    extensions: ['htm', 'html']
}

app.use(express.static('.', options))

app.listen(port);