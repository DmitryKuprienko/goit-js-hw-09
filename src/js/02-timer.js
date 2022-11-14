import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('input'),
  btnStart: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
refs.btnStart.setAttribute('disabled', false);
let timerDeadline = null;
let timerValue = null 


const option = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    
    timerDeadline = selectedDates[0].getTime();
    console.log('timerDeadline;', timerDeadline);

    if (timerDeadline < Date.now()) {
      refs.btnStart.setAttribute('disabled', true);
      alert('Please choose a date in the future');
      return
    } else {
      refs.btnStart.removeAttribute('disabled');
   

      
    }refs.btnStart.addEventListener('click', onStartСountdown());

  },
  
};

console.dir(refs.btnStart.addEventListener)
flatpickr('#datetime-picker', option);

function onStartСountdown() {
  
  //   refs.btnStart.setAttribute('disabled', false);
  let intervalId = setInterval(() => {
    const deltaTime = timerDeadline - Date.now();
    console.dir(intervalId)
    
    if (deltaTime < 1000) {
      clearInterval(intervalId);
      return
    }
    const timerValue = convertMs(deltaTime);
    // console.log(timerValue);

    updateClocFase(timerValue);
  }, 1000);
}

function addLeadinZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadinZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadinZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadinZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadinZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function updateClocFase({ days, hours, minutes, seconds }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}
