// const bodyRef = document.querySelector('body');
// const buttonStart = document.querySelector(`[data-start]`);
// const buttonStop = document.querySelector(`[data-Stop]`);

const refs = {
  bodyRef: document.querySelector('body'),
  buttonStart: document.querySelector(`[data-start]`),
  buttonStop: document.querySelector(`[data-Stop]`),
};


let interval = null;

refs.buttonStart.addEventListener('click', changeColor);
refs.buttonStop.addEventListener('click', stopChange);

function changeColor() {
  interval = setInterval(() => {
    refs.bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.buttonStart.removeEventListener('click', changeColor);

}

function stopChange() {
  clearInterval(interval);
  refs.buttonStart.addEventListener('click', changeColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
