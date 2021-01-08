// TODO: confirm these are working!
const router = require("express").Router();
const db = require("../models");


router.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

router.get("/api/workouts", (req, res) => {
  db.Workout.find()
    .then((foundWorkouts) => {
      res.json(foundWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/:id", (req, res) => {
  db.Workout.findById(req.params.id).then((foundWorkouts) => {
    res.json(foundWorkouts);
  });
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updateWorkout) => {
      res.json(updateWorkout);
    }
  );
});

router.delete("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndDelete(req.params.id).then((results) => {
    res.json(results);
  });
});

module.exports = router;
