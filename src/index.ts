import { html, render } from "lit-html";
import { FullscreenControl, Menu, Page } from "./components";
import content from "./content";

const TorskApp = (preloadedVideo) => {
  const [srcUrl, objectUrl] = preloadedVideo;
  content[6].sv.html = content[6].sv.html.replace(srcUrl, objectUrl as string);

  const state = { page: undefined, language: "sv" };

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

const preloadVideo = (src) =>
  fetch(src)
    .then((response) => response.blob())
    .then((response) => {
      return [src, URL.createObjectURL(response)];
    });

const preloadImage = (src) =>
  new Promise((r) => {
    const image = new Image();
    image.onload = r;
    image.onerror = r;
    image.src = src;
  });

render(
  html`<div
    style="display:flex;justify-content:center;align-items:center;height:100vh;"
  >
    Loading content...
  </div>`,
  document.body
);

const videos = ["sample.mp4"];
const images = ["cod.png", "stor-torsk.jpeg", "torsk.jpeg"];

Promise.all([
  ...videos.map((src) => preloadVideo(src)),
  ...images.map((src) => preloadImage(src)),
]).then((response) => {
  const video = response[0];
  render(TorskApp(video), document.body);
});
