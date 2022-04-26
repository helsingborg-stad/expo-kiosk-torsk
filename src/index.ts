import { html, render } from "lit-html";
import { FullscreenControl, Menu, Page } from "./components";
import content from "./content";

const TorskApp = () => {
  let state = { page: undefined, language: "sv" };

  const menu = Menu();
  const page = Page(state);
  const fullscreenControl = FullscreenControl();

  page.component.addEventListener("language", (event) => {
    state.language = (event as CustomEvent).detail;
    page.actions.setContent(content[state.page][state.language]);
  });

  menu.component.addEventListener("navigation", (event) => {
    state.page = (event as CustomEvent).detail;
    page.actions.open();
    page.actions.setContent(content[state.page][state.language]);
  });

  page.component.addEventListener("close", () => {
    menu.actions.open();
    page.actions.setContent({ title: "", back: "", html: "" });
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
