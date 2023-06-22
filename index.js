let activePage = "skills";

function hide(id) {
  $("#" + id).style.display = "none";
}

function show(id) {
  const page = $(`#${id}`);
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
    const id = e.target.dataset.page;
    // console.info("you clicked on %o menu", id, e.target);
    if (id) {
      displayPage(id);
    } else {
      console.warn('please use <a data-page="pageid"> ');
    }
  }
}

function showSkillsList(skills) {
  const ul = $("#skills ul");
  const skillsHTML = skills.map((skill) => {
    // console.info("inside map", skill);

    // <li class="favorite">HTML</li>
    const cls = skill.favorite ? "favorite" : "";
    return `<li class="${cls}">${skill.name} <span> · ${skill.endorcements} </span> </li>`;
  });

  //   console.warn(skillsHTML);
  skillsHTML.push("<li>...</li>");
  ul.innerHTML = skillsHTML.join("");
}

function getSkillsRequest() {
  //fetch ne aduce date de pe server din fisierul skills.json
  fetch("skills.json").then((r) => {
    // console.info("done");
    r.json().then(showSkillsList);
  });
  //   console.warn("am sau nu info?", skills);
  //   console.warn("todo get skills");
}

displayPage(activePage);
$("#top-menu-bar").addEventListener("click", clickOnMenu);

getSkillsRequest();

// function h() {
//   return "h";
// }

// const f = function () {
//   return "f";
// };

// const a = () => {
//   return "a";
// };
