const menu = document.getElementById("menu");
const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuButton.setAttribute("aria-expanded", menu.classList.contains("active"));
  console.log("button clicked");
});
