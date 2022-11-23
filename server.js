const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static('public'));

app.listen(process.env.PORT || 3000);