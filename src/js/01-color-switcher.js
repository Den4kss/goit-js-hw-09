const startRef = document.querySelector('button[data-start]');
const stopRef = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let colorInterval;
startRef.addEventListener('click', () => {
  startRef.disabled = true;
  return (colorInterval = setInterval(() => {
    bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000));
});

stopRef.addEventListener('click', () => {
  startRef.disabled = false;
  clearInterval(colorInterval);
});
