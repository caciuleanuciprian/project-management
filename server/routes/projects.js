const { Project, validate } = require("../models/project");
const express = require("express");
const router = express.Router();

router.post("/createProject", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let project = await Project.findOne({ title: req.body.title });
  if (project) {
    return res.status(400).send("Project already exists!");
  } else {
    project = new Project({
      title: req.body.title,
      description: req.body.description,
      tasks: req.body.tasks,
      members: req.body.members,
    });
    await project.save();
    res.send(project);
  }
});

router.get("/getProjects", async (req, res) => {
  Project.find({}, function (error, projects) {
    let projectMap = {};
    projects.forEach(function (project) {
      projectMap[project._id] = project;
    });
    res.send(projectMap);
  });
});

module.exports = router;
