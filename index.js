var activePage = "home";

function hide(id) {
  $("#" + id).style.display = "none";
}

function show(id) {
  var page = $(`#${id}`);
  page.style.display = "block";
}

function $(selector) {
  return document.querySelector(selector);
}

function displayPage(id) {
  //   hideAllPages(id);
  hide(activePage);
  $(`#top-menu-bar a[data-page="${activePage}"]`).classList.remove("active");
  activePage = id;
  show(id);
  $(`#top-menu-bar a[data-page="${id}"]`).classList.add("active");
}

displayPage(activePage);

// function hideAllPages() {
//   hide("home");
//   hide("skills");
//   hide("languages");
//   hide("projects");
// }

// function displayHome() {
//   hideAllPages();
//   var page = document.getElementById("home");
//   page.style.display = "block";
// }

// function displaySkills() {
//   hideAllPages();
//   var page = document.getElementById("skills");
//   page.style.display = "block";
// }

// function displayLanguages() {
//   hideAllPages();
//   var page = document.getElementById("languages");
//   page.style.display = "block";
// }

// function displayProjects() {
//   hideAllPages();
//   var page = document.getElementById("projects");
//   page.style.display = "block";
// }
