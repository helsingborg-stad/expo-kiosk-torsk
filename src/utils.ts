export const isDefined = <T>(value: T | undefined | null): value is T => {
  return value !== undefined && value !== null;
};

export const element = <T>(html: string): T => {
  var template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild as unknown as T;
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
