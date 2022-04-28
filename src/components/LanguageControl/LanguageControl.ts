import { flyg } from "flyg";

export const LanguageControl = (props) => {
  const component = flyg<HTMLElement>`
    <div class="${props.class}">
        <input type="radio" id="sv" name="language" value="sv" />
        <label for="sv">Svenska</label>
        <input type="radio" id="en" name="language" value="en" />
        <label for="en">English</label>
    </div>
  `;

  const inputs =
    component.querySelectorAll<HTMLInputElement>("[name='language']");

  inputs.forEach((radioButton) => {
    radioButton.checked = radioButton.value === props.language;
  });

  inputs.forEach((radioButton) => {
    radioButton.addEventListener("change", (event) => {
      component.dispatchEvent(
        new CustomEvent("language", {
          detail: (event.target as HTMLInputElement).value,
          bubbles: true,
        })
      );
    });
  });

  return { component };
};
