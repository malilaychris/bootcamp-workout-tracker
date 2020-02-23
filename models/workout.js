const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const workoutSchema  = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercised: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Enter exercise type'
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter exercise name'
      },
      duration: {
        type: Number,
        required: 'Enter exercise duration'
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
}, {
  toJSON: {
    virtuals: true
  }
});

workoutSchema.virtual('totalDuration').get(() => {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const workout = mongoose.model('workout', workoutSchema);

module.exports = workout;