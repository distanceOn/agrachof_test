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

  console.log(event.deltaY);

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
