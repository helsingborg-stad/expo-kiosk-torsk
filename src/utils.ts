export const isDefined = <T>(value: T | undefined | null): value is T => {
  return value !== undefined && value !== null;
};

export const preloadVideo = (src) =>
  fetch(src)
    .then((response) => response.blob())
    .then((response) => {
      return [src, URL.createObjectURL(response)];
    });

export const preloadImage = (src) =>
  new Promise((response) => {
    const image = new Image();
    image.onload = response;
    image.onerror = response;
    image.src = src;
  });

export const disableBrowserBack = () => {
  history.pushState(null, document.title, location.href);
  window.addEventListener("popstate", function (event) {
    history.pushState(null, document.title, location.href);
  });
};
