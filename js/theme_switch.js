let theme = localStorage.getItem("theme") || "lightmode";
document.body.className = theme;

const themeBtn = document.getElementById("theme-btn");
const secondThemeBtn = document.getElementById("slide-theme-btn");

function setTheme(t) {
  document.body.className = t;
  localStorage.setItem("theme", t);
  theme = t;
  console.log("Saved theme:", t);
}

function toggleTheme() {
  if (document.body.classList.contains("lightmode")) setTheme("darkmode");
  else setTheme("lightmode");
}

if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
if (secondThemeBtn) secondThemeBtn.addEventListener("click", toggleTheme);

const navAccessBtn = document.getElementById("nav-access-btn");
const menu = document.getElementById("slide-nav-menu");
if (navAccessBtn && menu) {
  navAccessBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}
