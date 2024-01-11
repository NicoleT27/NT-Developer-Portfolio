const { Schema, model } = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  technologies: [
    {
      type: String,
    },
  ],
  links: [
    {
      type: String,
      required: true,
    },
  ],
});

const Project = model("Project", projectSchema);

module.exports = Project;

