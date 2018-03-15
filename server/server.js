const express = require('express');
const PORT = process.env.PORT || 4000;
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

require('./routes')(app);

app.listen(PORT, function() {
    console.log('app listening on Port ' + PORT);
})