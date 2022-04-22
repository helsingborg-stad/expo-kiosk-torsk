import illustration from "./illustration";

const menu = document.querySelector(".menu");

menu.innerHTML = illustration();

const info = document.querySelector(".info");
const title = document.querySelector(".info__title");
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

const setInfoContent = (index: number) => {
  title.innerHTML = `${index}.`;
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
  item.addEventListener("click", (event) => {
    setInfoContent(
      Number(
        (event.target as Element)
          .closest(".menu-item")
          .getAttribute("data-value")
      )
    );
    menu.classList.remove("menu--opened");
    menu.classList.add("menu--closed");
    info.classList.add("info--opened");
  });
});

backButton.addEventListener("click", () => {
  menu.classList.remove("menu--closed");
  menu.classList.add("menu--opened");
  info.classList.remove("info--opened");
});
