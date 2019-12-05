// Get references to page elements
const $projectTitle = $("#project-title");
const $projectDescription = $("#project-description");
const $projectRepo = $("#project-repo");
const $projectDeployed = $("#project-deployed");
const $projectImage = $("#project-image");
const $projectAltText = $("#project-alt-text");
const $submitBtn = $("#submit");
const $projectList = $("#project-list");

let project;
let idToDelete;

// The API object contains methods for each kind of request we'll make
const API = {
  saveProject: project => {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/projects",
      data: JSON.stringify(project)
    });
  },
  getProjects: () => {
    return $.ajax({
      url: "api/projects",
      type: "GET"
    });
  },
  deleteProject: id => {
    return $.ajax({
      url: "/api/projects/" + id,
      type: "DELETE"
    });
  }
};

// refreshProjects gets new projects from the db and repopulates the list
const refreshProjects = () => {
  console.log("Refreshing Project List");
  API.getProjects().then(data => {
    const $projects = data.map(project => {
      const $a = $("<a>")
        .text(project.title)
        .attr("href", "/project/" + project.id);

      const $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": project.id
        })
        .append($a);

      const $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $projectList.empty();
    $projectList.append($projects);
  });
};

// handleFormSubmit is called whenever we submit a new project
// Save the new project to the db and refresh the list
const handleFormSubmit = event => {
  event.preventDefault();

  console.log("Button Clicked");

  project = {
    title: $projectTitle.val().trim(),
    description: $projectDescription.val().trim(),
    repoURL: $projectRepo.val().trim(),
    deployedURL: $projectDeployed.val().trim(),
    image: $projectImage.val().trim(),
    imageText: $projectAltText.val().trim()
  };

  if (!(project.title && project.description)) {
    alert("You must enter a project title and description!");
    return;
  }

  API.saveProject(project).then(() => {
    refreshProjects();

    console.log("Project Saved");

    $projectTitle.val("");
    $projectDescription.val("");
    $projectRepo.val("");
    $projectDeployed.val("");
    $projectImage.val("");
    $projectAltText.val("");
  });
};

// handleDeleteBtnClick is called when an project's delete button is clicked
// Remove the project from the db and refresh the list
const handleDeleteBtnClick = function() {
  idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteProject(idToDelete).then(() => refreshProjects());
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$projectList.on("click", ".delete", handleDeleteBtnClick);
