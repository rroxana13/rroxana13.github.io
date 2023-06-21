var activePage = "home";

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  var page = document.getElementById(id);
  page.style.display = "block";
}

function displayPage(id) {
  //   hideAllPages(id);
  hide(activePage);
  document
    .querySelector(`#top-menu-bar a[data-page="${activePage}"]`)
    .classList.remove("active");
  activePage = id;
  show(id);
  document
    .querySelector(`#top-menu-bar a[data-page="${id}"]`)
    .classList.add("active");
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
