import { flyg } from "flyg";
import illustration from "../../assets/illustration";

export const Menu = (video) => {
  const component = flyg<HTMLElement>`
    <div class="menu">
      ${illustration()}
      <video autoplay muted loop>
        <source src="${video}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  `;

  const menuItems = component.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      component.classList.remove("menu--opened");
      component.classList.add("menu--closed");
      component.dispatchEvent(
        new CustomEvent("navigation", {
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
