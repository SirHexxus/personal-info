//  Package Variable Declarations
const express = require("express");

//  Package Dependent Variable Declarations
const router = express.Router();

//  File Import Variable Declarations
//  //  Pull in Project model
const Project = require("../models/project");

//  Get all Projects
//  //  @route      GET /api/projects
//  //  @desc       Get all Projects
//  //  @access     Public
router.get("/projects", (req, res) => {
  Project.find()
    .then(dbProjects => res.json(dbProjects))
    .catch(err => res.status(404).json(`No Projects Found\nError:${err}`));
});

//  Get one Project by id
//  //  @route      PUT api/project/:id
//  //  @desc       Get Project info by id
//  //  @access     Public
router.get("/project/:id", (req, res) => {
  Project.findById(req.params.id)
    .then(dbProject => res.json(dbProject))
    .catch(err => res.status(404).json(`Project Not Found\nError: ${err}`));
});

//  Add New Project
//  //  @route      PUT api/project/:id
//  //  @desc       Get Project info by id
//  //  @access     Public
router.post("/projects", (req, res) => {
  const { title, description, repoURL, deployedURL, image, tags } = req.body;
  const newProject = new Project({
    title,
    description,
    repoURL,
    deployedURL,
    image,
    tags
  });

  newProject
    .save()
    .then(project => res.json(project))
    .catch(err =>
      res.status(404).json(`Could Not Save Project\nError: ${err}`)
    );
});

//  Modify existing Project
//  //  @route      PUT api/project/:id
//  //  @desc       Update existing project info
//  //  @access     Public
router.put("/project/:id", (req, res) => {
  Project.findById(req.params.id)
    .then(project =>
      project.update(req.body).then(() => res.json({ success: true }))
    )
    .catch(err => res.status(404).json({ success: false, error: err }));
});

//  Remove existing Project
//  //  @route      DELETE /api/projects/:id
//  //  @desc       Delete a project
//  //  @access     Public
router.delete("/project/:id", (req, res) => {
  Project.findById(req.params.id)
    .then(project => project.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false, error: err }));
});

//  Exports
module.exports = router;
