import { element } from "../utils";

export const FullscreenControl = () => {
  const component = element<HTMLButtonElement>(
    `<button class="fullscreen-button">Fullscreen</button>`
  );

  const fullscreenchange = () => {
    if (document.fullscreenElement) {
      component.classList.add("d-none");
    } else {
      component.classList.remove("d-none");
    }
  };

  document.addEventListener("fullscreenchange", fullscreenchange);

  component.addEventListener("click", () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  });

  return { component };
};
