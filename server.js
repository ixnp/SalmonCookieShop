'use strict';

//TODO what was fs for?
const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

const conString = 'postgres://postgres:1234@localhost:5432/salmoncookie';
const client = new pg.Client(conString);
client.connect();
client.on('error', error => {
  console.error(error);
});
//TODO not sure I fully understand what bodyParser does.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}!`);
});
