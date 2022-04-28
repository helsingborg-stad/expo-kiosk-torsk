import { flyg } from "flyg";
import { FullscreenControl, Menu, Page } from "./components";
import content from "./content";
import { preloadImage, preloadVideo } from "./utils";

const TorskApp = (preloadedVideo) => {
  const [srcUrl, objectUrl] = preloadedVideo;
  content[6].sv.html = content[6].sv.html.replace(srcUrl, objectUrl as string);

  const state = { page: undefined, language: "sv" };

  const menu = Menu();
  const page = Page(state);
  const fullscreenControl = FullscreenControl();

  menu.component.addEventListener("navigation", (event) => {
    state.page = (event as CustomEvent).detail;
    page.actions.open();
    page.actions.setContent(content[state.page][state.language]);
  });

  page.component.addEventListener("language", (event) => {
    state.language = (event as CustomEvent).detail;
    page.actions.setContent(content[state.page][state.language]);
  });

  page.component.addEventListener("close", () => {
    menu.actions.open();
    page.actions.setContent({ title: "", back: "", html: "" });
  });

  return flyg<HTMLElement>`
    <div class="wrapper">
      ${fullscreenControl.component} ${page.component} ${menu.component}
    </div>
  `;
};

const videos = ["sample.mp4"];
const images = ["cod.png", "stor-torsk.jpeg", "torsk.jpeg"];

const Loader = flyg<HTMLElement>`<div class="loader">Loading content...</div>`;

document.body.appendChild(Loader);

Promise.all([
  ...videos.map((src) => preloadVideo(src)),
  ...images.map((src) => preloadImage(src)),
]).then((response) => {
  const video = response[0];
  document.body.removeChild(Loader);
  document.body.appendChild(TorskApp(video));
});
