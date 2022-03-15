const Joi = require("joi");
const mongoose = require("mongoose");

const Task = mongoose.model(
  "Task",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    assigned: {
      type: String,
      default: null,
    },
    reporter: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: null,
    },
    estimation: {
      type: Number,
      default: null,
    },
  })
);

function validateTask(task) {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
    assigned: Joi.string(),
    reporter: Joi.string().required(),
    type: Joi.string(),
  });
  return schema.validate(task);
}

exports.Task = Task;
exports.validate = validateTask;
