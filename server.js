const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");

const PORT = process.env.PORT || 3000;

// const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(apiRoutes);
app.use(htmlRoutes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose connected successfully.");
});

connection.on("error", (err) => {
  console.log("Mongoose connected error:" + err);
});

app.use(require("./routes/api-routes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
