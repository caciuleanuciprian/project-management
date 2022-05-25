const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const users = require("./routes/users");
const tasks = require("./routes/tasks");
const projects = require("./routes/projects");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@database.wc2ho.mongodb.net/Database?retryWrites=true&w=majority`
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
  console.log("Connected succesfully to database");
});

app.use("/api/users", users);
app.use("/api/tasks", tasks);
app.use("/api/projects", projects);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
