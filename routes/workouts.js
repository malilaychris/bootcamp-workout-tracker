const router = require('express').Router();
const path = require('path');

const db = require('../models/workout');

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

  app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'stats.html'));
  });

  app.get('/exercise', (req, res) => {
    res.sendFile(path,join(__dirname, '../public', 'exercise.html'));
  });

  app.get('/api/workouts', (req, res) => {
    
  });

  app.post('/api/workouts', (req, res) => {
    
  });

  app.put('/api/workouts/:id', (req, res) => {

  });

}