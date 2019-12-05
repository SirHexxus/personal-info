var db = require("../models");

module.exports = function(app) {
  // Get all projects
  app.get("/api/projects", (req, res) =>
    db.Project.findAll({}).then(dbProjects => res.json(dbProjects))
  );

  // Create a new project
  app.post("/api/projects", (req, res) =>
    db.Project.create(req.body).then(dbProject => res.json(dbProject))
  );

  // Delete a project by id
  app.delete("/api/projects/:id", (req, res) =>
    db.Project.destroy({ where: { id: req.params.id } }).then(dbProject =>
      res.json(dbProject)
    )
  );
};
