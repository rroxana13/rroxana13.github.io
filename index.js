var activePage = "skills";

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

function clickOnMenu(e) {
  if (e.target.matches("a")) {
    var id = e.target.dataset.page;
    // console.info("you clicked on %o menu", id, e.target);
    if (id) {
      displayPage(id);
    } else {
      console.warn('please use <a data-page="pageid"> ');
    }
  }
}

function showSkillsList() {
  var ul = $("#skills ul");
  var skills = ["HTML", "CSS", "JS"];

  var skillsHTML = skills.map(function (skill) {
    // console.info("inside map", skill);
    // <li class="favorite">HTML</li>

    return `<li>${skill}</li>`;
  });
  //   console.warn(skillsHTML);
  ul.innerHTML = skillsHTML.join("");
}

displayPage(activePage);
$("#top-menu-bar").addEventListener("click", clickOnMenu);
showSkillsList();

// displayPage('skills');

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
