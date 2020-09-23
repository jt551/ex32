'use strict';

const express = require('express');

// Constants
const LOCALPORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('ex32 - check circleci deployment');
});

app.listen(process.env.PORT || LOCALPORT);
console.log("started");