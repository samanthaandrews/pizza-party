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
