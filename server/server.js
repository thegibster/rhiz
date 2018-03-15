const express = require('express');
const PORT = process.env.PORT || 4000;
const app = express();

app.listen(PORT, function() {
    console.log('app listening on Port ' + PORT);
})