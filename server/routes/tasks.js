const { Task, validate } = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/createTask", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let task = await Task.findOne({ title: req.body.title });
  if (task) {
    return res.status(400).send("Task already exists!");
  } else {
    task = new Task({
      title: req.body.title,
      description: req.body.description,
      assigned: req.body.assigned,
      reporter: req.body.reporter,
      type: req.body.type,
      estimation: req.body.estimation,
    });
    await task.save();
    res.send(task);
  }
});

router.get("/getTasks", async (req, res) => {
  Task.find({}, function (error, tasks) {
    let taskMap = [];
    tasks.forEach(function (task) {
      taskMap.push(task);
    });
    res.send(taskMap);
  });
});

router.get("/:id", async (req, res) => {
  Task.findById(req.params.id).then((task) => {
    if (!task) {
      return res.status(404).end();
    } else {
      return res.status(200).json(task);
    }
  });
});

module.exports = router;
