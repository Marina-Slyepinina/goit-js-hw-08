function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
btn.addEventListener("click", handleClick);

function handleClick(event) {
  const color = getRandomHexColor();
  const body = document.querySelector("body");
  body.style.backgroundColor = color;

  document.querySelector(".color").innerHTML = color;
}