// function to set a given theme/color-scheme
function setTheme(themeName) {
  if (themeName === "theme-party") {
    document.getElementById("logo").src = "assets/logo_party.png";
    document.getElementById("header-image").src = "assets/cookie_kit_ingredients.png";
    document.getElementById("pizza-kit-image").src = "assets/disco_ball.png";
  } else {
    document.getElementById("logo").src = "assets/logo_pizza.png";
    document.getElementById("header-image").src = "assets/pizza_kit_ingredients.png";
    document.getElementById("pizza-kit-image").src = "assets/pizza_slice.png";
  }
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

function setChecked(themeName) {
  if (themeName === "theme-pizza") {
    document.getElementById("toggle-input").checked = false;
  } else document.getElementById("toggle-input").checked = true;
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
    setChecked("theme-pizza");
  } else {
    setTheme("theme-party");
    setChecked("theme-party");
  }
})();

const circleText = new CircleType(document.getElementById("circle-text")).radius(200);
const reverseCircleText = new CircleType(document.getElementById("reverse-circle-text")).dir(-1).radius(200);

window.fitText(document.getElementById("circle-text"));
window.fitText(document.getElementById("reverse-circle-text"));
