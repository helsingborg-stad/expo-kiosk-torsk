import { html, render } from "lit-html";
import { FullscreenControl, Menu, Page } from "./components";
import content from "./content";

const TorskApp = () => {
  let state = { page: undefined, language: "sv" };

  const menu = Menu();
  const page = Page();
  const fullscreenControl = FullscreenControl();

  menu.component.addEventListener("open", (event) => {
    state.page = (event as CustomEvent).detail;
    page.actions.open();
    page.actions.set(content[state.page][state.language]);
  });

  page.component.addEventListener("close", () => {
    menu.actions.open();
  });

  return html`
    <div class="wrapper">
      ${fullscreenControl.component} ${page.component} ${menu.component}
    </div>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  render(TorskApp(), document.body);
});
