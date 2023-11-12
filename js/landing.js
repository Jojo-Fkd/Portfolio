/* SKILLS DISPLAY */

const skills = document.querySelectorAll("#portfolio_owner article ul li");
const skillsArr = Array.from(skills).length;

let increment = 0;

setInterval(() => {
  increment++;
  skills.forEach((skill) => {
    skill.className = "";
    if (increment == skill.id) {
      skill.className = "display";
    }
  });
  if (increment === skillsArr) {
    increment = 0;
  }
}, 2500);
