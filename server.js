const express = require('express');
const path = require('path');

const workouts = require('./routes/workouts.js');
const db = require('./config/db.js');

const app = express();
let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname + '/public')));

app.use(workouts);

db();