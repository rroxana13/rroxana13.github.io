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
  //transofrma obiect json din array
  var skills = [
    { name: "HTML", favorite: true },
    { name: "CSS" },
    { name: "JS", favorite: true },
  ];

  var ul = $("#skills ul");

  skillsHTML = skills.map(function (skill) {
    // console.info("inside map", skill);

    // <li class="favorite">HTML</li>
    var cls = skill.favorite ? "favorite" : "";
    return `<li class="${cls}">${skill.name}</li>`;
  });

  //   console.warn(skillsHTML);
  ul.innerHTML = skillsHTML.join("");
  console.info(skillsHTML);
}

displayPage(activePage);
$("#top-menu-bar").addEventListener("click", clickOnMenu);
showSkillsList();
