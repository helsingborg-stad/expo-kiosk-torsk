import { flyg } from "flyg";
import { FullscreenControl, Menu, Page, Loader } from "./components";
import { preloadImage, preloadVideo } from "./utils";
import content from "./content";

const TorskApp = ({ map, torskSvenska, torskEngelska }) => {
  const [torskSvenskaUrl, torskSvenskaObjectUrl] = torskSvenska;
  const [torskEngelskaUrl, torskEngelskaObjectUrl] = torskEngelska;

  content[6].sv.html = content[6].sv.html.replace(
    torskSvenskaUrl,
    torskSvenskaObjectUrl as string
  );

  content[6].en.html = content[6].en.html.replace(
    torskEngelskaUrl,
    torskEngelskaObjectUrl as string
  );

  const state = { page: undefined, language: "sv" };

  const menu = Menu(map[1]);
  const page = Page(state);
  const fullscreenControl = FullscreenControl();

  const hasPreviousPage = () => state.page > 1;
  const hasNextPage = () => state.page < Object.keys(content).length;

  menu.component.addEventListener("navigation", (event) => {
    state.page = (event as CustomEvent).detail;
    page.actions.open();
    page.actions.setContent(
      content[state.page][state.language],
      hasNextPage(),
      hasPreviousPage()
    );
  });

  page.component.addEventListener("language", (event) => {
    state.language = (event as CustomEvent).detail;
    page.actions.setContent(
      content[state.page][state.language],
      hasNextPage(),
      hasPreviousPage()
    );
  });

  page.component.addEventListener("close", () => {
    menu.actions.open();
    page.actions.setContent({ title: "", back: "", html: "", image: "" });
  });

  page.component.addEventListener("next", () => {
    if (hasNextPage()) {
      state.page++;
      page.actions.setContent(
        content[state.page][state.language],
        hasNextPage(),
        hasPreviousPage()
      );
    }
  });

  page.component.addEventListener("previous", () => {
    if (hasPreviousPage()) {
      state.page--;
      page.actions.setContent(
        content[state.page][state.language],
        hasNextPage(),
        hasPreviousPage()
      );
    }
  });

  return flyg<HTMLElement>`
    <div class="wrapper">
      ${fullscreenControl.component} ${page.component} ${menu.component}
    </div>
  `;
};

const videos = ["map.mp4", "torsk-svenska.mp4", "torsk-engelska.mp4"];
const images = ["1.svg", "2.svg", "3.svg", "4.svg", "5.svg", "6.svg"];

const loader = Loader();
document.body.appendChild(loader.component);

Promise.all([
  ...videos.map((src) => preloadVideo(src)),
  ...images.map((src) => preloadImage(src)),
]).then((response) => {
  document.body.removeChild(loader.component);
  document.body.appendChild(
    TorskApp({
      map: response[0],
      torskSvenska: response[1],
      torskEngelska: response[2],
    })
  );
});
