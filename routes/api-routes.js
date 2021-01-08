const router = require("express").Router();
const db = require("../models");

router.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

router.get("/api/workout", (req, res) => {
  db.Workout.find()
    .then((foundWorkouts) => {
      res.json(foundWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workout/:id", (req, res) => {
  for (let i = 0; i <= workout.length; i++) {
    if (workout[i].name === req.params.id) {
      return res.json(workout[i]);
    }
  }
});

router.post("/api/workout", (req, res) => {
  db.Workout.create(req.body)
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workout/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updateWorkout) => {
      res.json(updateWorkout);
    }
  );
});

router.delete("/api/Workout/:id", (req, res) => {
  db.Workout.findByIdAndDelete(req.params.id).then((results) => {
    res.json(results);
  });
});

module.exports = router;
