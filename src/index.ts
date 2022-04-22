import illustration from "./illustration";

const menu = document.querySelector(".menu");
menu.innerHTML = illustration();

const menuItems = document.querySelectorAll(".menu-item");
const backButton = document.querySelector(".info__back-button");
const fullscreenButton = document.querySelector(".fullscreen-button");

const fullscreenchange = () => {
  if (document.fullscreenElement) {
    fullscreenButton.classList.add("d-none");
  } else {
    fullscreenButton.classList.remove("d-none");
  }
};

document.addEventListener("fullscreenchange", fullscreenchange);

fullscreenButton.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("menu--opened");
    menu.classList.add("menu--closed");
    backButton.classList.remove("d-none");
  });
});

backButton.addEventListener("click", () => {
  menu.classList.remove("menu--closed");
  menu.classList.add("menu--opened");
  backButton.classList.add("d-none");
});
