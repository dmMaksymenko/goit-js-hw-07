const widgetDiv = document.querySelector('.widget');
const btn = widgetDiv.querySelector('.change-color');
btn.addEventListener('click', changeBodyColor);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function changeBodyColor() {
  const randomColor = getRandomHexColor();
  const bodyColor = document.body.style.backgroundColor = randomColor;

  const colorText = widgetDiv.querySelector('.color');
  colorText.textContent = randomColor;
  console.log(colorText);

}
