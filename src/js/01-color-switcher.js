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
refs.buttonStop.disabled = true;

function changeColor() {
  interval = setInterval(() => {
    refs.bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.buttonStart.disabled =  true;
  refs.buttonStop.disabled =  false;
}

function stopChange() {
  clearInterval(interval);
  refs.buttonStart.disabled =  false;
  refs.buttonStop.disabled =  true;
  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
