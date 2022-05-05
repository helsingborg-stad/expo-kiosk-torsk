import { flyg } from "flyg";
import { LanguageControl } from "..";

const arrow = () => flyg`
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 473.654 473.654" style="enable-background:new 0 0 473.654 473.654;" xml:space="preserve">
  <circle style="fill:currentColor;" cx="236.827" cy="236.827" r="236.827"/>
  <path style="fill:#FFFFFF;" d="M358.075,216.091c-27.011-27.011-54.018-54.022-81.029-81.033
  c-25.56-25.564-65.08,14.259-39.456,39.883c11.009,11.009,22.019,22.019,33.028,33.032c-43.353,0-86.706,0-130.055,0
  c-36.225,0-36.543,56.109-0.404,56.109c43.491,0,86.982,0,130.47,0c-11.084,11.084-22.168,22.168-33.252,33.252
  c-25.564,25.56,14.259,65.08,39.883,39.456c27.011-27.007,54.018-54.014,81.029-81.025
  C369.133,244.916,368.838,226.85,358.075,216.091z"/>
</svg>
`;

export const Page = (state) => {
  const component = flyg<HTMLElement>`
    <div class="page">
      <div class="page__content">
          <div class="page__header">
            <div class="page__title"></div>
            ${
              LanguageControl({
                language: state.language,
                class: "page__language-selector",
              }).component
            }
          </div>
          <div class="page__body"></div>
          <div class="page__footer">
              <button class="page__nav-button page__nav-button--previous">${arrow()}</button>
              <button class="page__back-button"></button>
              <button class="page__nav-button page__nav-button--next">${arrow()}</button>
          </div>
      </div>
    </div>
  `;

  const titleElement = component.querySelector(".page__title");
  const bodyElement = component.querySelector(".page__body");
  const backButtonElement = component.querySelector(".page__back-button");
  const nextButtonElement = component.querySelector(".page__nav-button--next");
  const previousButtonElement = component.querySelector(
    ".page__nav-button--previous"
  );

  nextButtonElement.addEventListener("click", () => {
    component.dispatchEvent(new CustomEvent("next"));
  });

  previousButtonElement.addEventListener("click", () => {
    component.dispatchEvent(new CustomEvent("previous"));
  });

  backButtonElement.addEventListener("click", () => {
    component.classList.remove("page--opened");
    component.dispatchEvent(new CustomEvent("close"));
  });

  const actions = {
    open: () => {
      component.classList.add("page--opened");
    },
    setContent: (
      { title, html, back, image },
      showNextButton = true,
      showPreviousButton = true
    ) => {
      titleElement.innerHTML = title;
      bodyElement.innerHTML = html;
      backButtonElement.innerHTML = back;
      component.style.backgroundImage = `url(${image})`;

      if (showNextButton) {
        nextButtonElement.classList.remove("page__nav-button--disabled");
      } else {
        nextButtonElement.classList.add("page__nav-button--disabled");
      }

      if (showPreviousButton) {
        previousButtonElement.classList.remove("page__nav-button--disabled");
      } else {
        previousButtonElement.classList.add("page__nav-button--disabled");
      }
    },
  };

  return { component, actions };
};
