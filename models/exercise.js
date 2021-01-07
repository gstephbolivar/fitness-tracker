const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        required: "Enter an exercise type"
    },
    name:  {
        type: String,
        required: "Enter a name for the exercise"
    },
    duration: {
        type: Number,
        unique: true,
        required: true
    },
    weight: {
        type: Number,
        unique: true,
        required: true
    },
    reps: {
        type: Number,
        unique: true,
        required: true
    },
    sets: {
        type: Number,
        unique: true,
        required: true
    }
})

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;