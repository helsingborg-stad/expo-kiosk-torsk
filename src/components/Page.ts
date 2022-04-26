import { element } from "../utils";

export const Page = ({ language }) => {
  const component = element<HTMLElement>(`
    <div class="page">
        <div class="page__content">
            <div class="page__header">
              <div class="page__title"></div>
              <div class="page__language-selector ">
                <input type="radio" id="sv" name="language" value="sv" />
                <label for="sv">Svenska</label>
                <input type="radio" id="en" name="language" value="en" />
                <label for="en">English</label>
              </div>
            </div>
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
  const languageInputs =
    component.querySelectorAll<HTMLInputElement>("[name='language']");

  languageInputs.forEach((radioButton) => {
    radioButton.checked = radioButton.value === language;
  });

  languageInputs.forEach((radioButton) => {
    radioButton.addEventListener("change", (event) => {
      component.dispatchEvent(
        new CustomEvent("language", {
          detail: (event.target as HTMLInputElement).value,
        })
      );
    });
  });

  buttonElement.addEventListener("click", () => {
    component.classList.remove("page--opened");
    component.dispatchEvent(new CustomEvent("close"));
  });

  const actions = {
    open: () => {
      component.classList.add("page--opened");
    },
    setContent: ({ title, html, back }) => {
      titleElement.innerHTML = title;
      bodyElement.innerHTML = html;
      buttonElement.innerHTML = back;
    },
  };

  return { component, actions };
};
