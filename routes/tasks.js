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

router.put("/updateTask/:id", async (req, res) => {
  Task.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      assigned: req.body.assigned,
      type: req.body.type,
      estimation: req.body.estimation,
      status: req.body.status,
    },
    {
      new: true,
      returnOriginal: false,
    }
  )
    .then((taskUpdated) => {
      if (!taskUpdated) {
        return res.status(404).end();
      }
      return res.status(200).json(taskUpdated);
    })
    .catch((error) => next(error));
});

router.get("/getTasks/backlog", async (req, res) => {
  Task.find({ status: "backlog" }, function (error, tasks) {
    let taskMap = [];
    tasks.forEach(function (task) {
      taskMap.push(task);
    });
    res.send(taskMap);
  });
});

router.get("/getTasks/development", async (req, res) => {
  Task.find({ status: "development" }, function (error, tasks) {
    let taskMap = [];
    tasks.forEach(function (task) {
      taskMap.push(task);
    });
    res.send(taskMap);
  });
});

router.get("/getTasks/codeReview", async (req, res) => {
  Task.find({ status: "codeReview" }, function (error, tasks) {
    let taskMap = [];
    tasks.forEach(function (task) {
      taskMap.push(task);
    });
    res.send(taskMap);
  });
});

router.get("/getTasks/merged", async (req, res) => {
  Task.find({ status: "merged" }, function (error, tasks) {
    let taskMap = [];
    tasks.forEach(function (task) {
      taskMap.push(task);
    });
    res.send(taskMap);
  });
});

module.exports = router;
