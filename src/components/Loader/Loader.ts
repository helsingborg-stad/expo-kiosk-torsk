import { flyg } from "flyg";

export const Loader = () => {
  const component = flyg<HTMLElement>`<div class="loader">Loading content...</div>`;

  return { component };
};
