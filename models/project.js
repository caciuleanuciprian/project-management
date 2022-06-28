const Joi = require("joi");
const mongoose = require("mongoose");

const Project = mongoose.model(
  "Project",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    tasks: {
      type: Array,
      default: [],
    },
    members: {
      type: Array,
      default: [],
    },
  })
);

function validateProject(project) {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
    tasks: Joi.array(),
    members: Joi.array(),
  });
  return schema.validate(project);
}

exports.Project = Project;
exports.validate = validateProject;
