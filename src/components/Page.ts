import { element } from "../utils";

export const Page = () => {
  const component = element<HTMLElement>(`
    <div class="page">
        <div class="page__content">
            <div class="page__title"></div>
            <div class="page__body"></div>
            <div>
                <button class="page__back-button"></button>
            </div>
        </div>
    </div>
    `);

  const titleElement = component.querySelector(".page__title");
  const bodyElement = component.querySelector(".page__body");
  const buttonElement = component.querySelector(".page__back-button");

  buttonElement.addEventListener("click", () => {
    component.classList.remove("page--opened");
    component.dispatchEvent(new CustomEvent("close"));
  });

  const actions = {
    open: () => {
      component.classList.add("page--opened");
    },
    set: ({ title, html, back }) => {
      titleElement.innerHTML = title;
      bodyElement.innerHTML = html;
      buttonElement.innerHTML = back;
    },
  };

  return { component, actions };
};
