/* 
var db = require("../models");

module.exports = app => {
  // Load index page
  app.get("/", (req, res) => {
    db.Project.findAll({}).then(dbProjects => {
      res.render("index", {
        msg: "Welcome To JMS Web Designs",
        projects: dbProjects
      });
    });
  });

  // Load admin page
  app.get("/administration/:password", (req, res) => {
    db.Password.findOne({ where: { id: 1 } }).then(verify => {
      if (req.params.password === verify.password) {
        db.Project.findAll({}).then(dbProjects => {
          res.render("admin", {
            msg: `Hello ${verify.name}`,
            projects: dbProjects
          });
        });
      }
    });
  });

  // Load project page and pass in a project by id
  app.get("/project/:id", (req, res) => {
    db.Project.findOne({ where: { id: req.params.id } }).then(dbProject =>
      res.render("project", { project: dbProject })
    );
  });

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => res.render("404"));
};
 */
