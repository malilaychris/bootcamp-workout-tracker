const router = require('express').Router();
const path = require('path');

const db = require('../models');

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  });

  app.get('/exercise', (req, res) => {
    res.sendFile(path,join(__dirname, '../public/exercise.html'));
  });

  app.get('/api/workouts', (req, res) => {
    db.Workout.find({}).then(workout => {
      res.json(workout);
    }).catch(err => {
      res.json(err);
    });
  });

  app.put('/api/workouts/:id', (req, res) => {
    let workoutId = req.params.id;
    let workoutExercises = [];
    
    db.Workout.find({_id: workoutId}).then(workout => {
      workoutExercises = workout[0].exercises;
      res.json(workout[0].exercises);

      let exercises = [...workoutExercises, req.body];
      db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises});
    }).catch(err => {
      res.json(err);
    });
  });

  app.post('/api/workouts', async(req, res) => {
    try {
      res.json(await db.Workout.create({ type: 'workout' }));
    } catch(err) {
      res.json(err);
    }
  });

}