// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}
// function to toggle between pizza and party theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-pizza") {
    setTheme("theme-party");
  } else {
    setTheme("theme-pizza");
  }
}
// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme-pizza") {
    setTheme("theme-pizza");
  } else {
    setTheme("theme-party");
  }
})();

const radius = document.body.clientWidth - 100;

console.log(radius);

const circleText = new CircleType(document.getElementById("circle-text")).radius(radius);
const reverseCircleText = new CircleType(document.getElementById("reverse-circle-text")).dir(-1).radius(radius);

// window.addEventListener("resize", function updateRadius() {
//   circleText.radius(circleText.element.offsetWidth / 2);
//   reverseCircleText.radius(circleText.element.offsetWidth / 2);
// });
// updateRadius();

window.fitText(document.getElementById("circle-text"));

window.fitText(document.getElementById("reverse-circle-text"));
