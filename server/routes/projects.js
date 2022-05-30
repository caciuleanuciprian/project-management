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
    let projectMap = [];
    projects.forEach(function (project) {
      projectMap.push(project);
    });
    res.send(projectMap);
  });
});

router.get("/:id", async (req, res) => {
  Project.findById(req.params.id).then((project) => {
    if (!project) {
      return res.status(404).end();
    } else {
      return res.status(200).json(project);
    }
  });
});

router.put("/updateProject/:id", async (req, res) => {
  Project.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      tasks: req.body.tasks,
      members: req.body.members,
    },
    {
      new: true,
      returnOriginal: false,
    }
  )
    .then((projectUpdated) => {
      if (!projectUpdated) {
        return res.status(404).end();
      }
      return res.status(200).json(projectUpdated);
    })
    .catch((error) => next(error));
});

router.delete("/deleteProject/:id", async (req, res) => {
  let id = req.params.id;
  Project.findByIdAndDelete(id, function (error, response) {
    if (!response) {
      res.status(500).json(`Project with id:${id} doesn't exist.`);
    } else {
      if (error) {
        res
          .status(404)
          .json(`Project with id:${id} was not deleted. Something went wrong.`)
          .end();
      } else {
        res.status(200).json(`Project with id:${id} deleted succesfully`);
      }
    }
  });
});

module.exports = router;
