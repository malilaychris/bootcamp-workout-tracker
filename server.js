const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const db = require('./models');
const api = require('./routes/workouts');

const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname + '/public')));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

//db(app);
api(app);