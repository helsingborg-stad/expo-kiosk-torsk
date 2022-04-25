import { element } from "../utils";
import illustration from "../assets/illustration";

export const Menu = () => {
  const component = element<HTMLElement>(
    `<div class="menu">${illustration()}</div>`
  );

  const menuItems = component.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      component.classList.remove("menu--opened");
      component.classList.add("menu--closed");
      component.dispatchEvent(
        new CustomEvent("open", {
          detail: Number(
            (event.target as Element)
              .closest(".menu-item")
              .getAttribute("data-value")
          ),
        })
      );
    });
  });

  const actions = {
    open: () => {
      component.classList.add("menu--opened");
      component.classList.remove("menu--closed");
    },
  };

  return { component, actions };
};
