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
