const express = require('express')
const { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout } = require('../controllers/workoutController')

const router = express.Router()

//GET all workouts
router.get('/', getWorkouts)

//GET single workout
router.get('/:id', getWorkout)

//CREATE new workout
router.post('/', createWorkout)

//DELETE new workout
router.delete('/:id', deleteWorkout)

//PATCH new workout
router.patch('/:id', updateWorkout)

module.exports = router;