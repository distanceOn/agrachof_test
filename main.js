const rangeInput = document.getElementById("myRange");

function updateSliderBackground() {
  const value = rangeInput.value;
  const leftColor = "#be69d5";
  const rightColor = "#BAF1FF";

  const percentage =
    ((value - rangeInput.min) / (rangeInput.max - rangeInput.min)) * 100;
  const gradient = `linear-gradient(to right, ${leftColor} ${percentage}%, ${rightColor} ${percentage}%)`;

  rangeInput.style.setProperty("background", gradient, "important");
}

rangeInput.addEventListener("input", updateSliderBackground);

updateSliderBackground();

const bg = document.querySelector(".main__bg");
let positionBg = 0;
const bgWidth = bg.offsetWidth;

function handleWheel(event) {
  const windowWidth = window.innerWidth;

  if (event.deltaY < 0 && positionBg >= 1) {
    positionBg += event.deltaY;
    bg.style.setProperty(
      "transform",
      `translateX(-${positionBg}px)`,
      "important"
    );
  }

  if (event.deltaY > 0 && positionBg < windowWidth) {
    positionBg += event.deltaY;
    bg.style.setProperty(
      "transform",
      `translateX(-${positionBg}px)`,
      "important"
    );
  }
}

window.addEventListener("wheel", handleWheel);

const menuButton = document.querySelector(".menu__item"); // Assuming the button has the class 'menu__item'
const menuHide = document.querySelector(".menu_hide");
const closeButton = document.querySelector(".menu__close");

menuButton.addEventListener("click", () => {
  menuHide.classList.toggle("active"); // Add a class 'active' to show the menu
  closeButton.classList.toggle("active"); // Show the close button when the menu is active
});

closeButton.addEventListener("click", () => {
  menuHide.classList.remove("active"); // Hide the menu
  closeButton.classList.remove("active"); // Hide the close button
});
