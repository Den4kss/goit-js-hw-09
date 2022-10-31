import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  start: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  timer: document.querySelector('.timer'),
};
refs.timer.style.display = 'flex';
refs.timer.style.gap = '20px';
refs.timer.style.justifyContent = 'center';
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      window.alert('Please choose a date in the future');
    }
    if (selectedDates[0] >= new Date()) {
      refs.start.disabled = false;
    }
  },
};
const fp = flatpickr('#datetime-picker', options);
refs.start.addEventListener('click', () => {
  refs.start.disabled = true;
  const intrvalId = setInterval(() => {
    const dataUser = fp.selectedDates[0].getTime();
    const toDay = new Date().getTime();
    const timeDifference = dataUser - toDay;
    const msDate = convertMs(timeDifference);

    refs.days.textContent = addLeadingZero(msDate.days);
    refs.hours.textContent = addLeadingZero(msDate.hours);
    refs.minutes.textContent = addLeadingZero(msDate.minutes);
    refs.seconds.textContent = addLeadingZero(msDate.seconds);

    const stopTimer =
      msDate.days + msDate.hours + msDate.minutes + msDate.seconds;
    console.log(stopTimer);
    if (stopTimer === 0) {
      clearInterval(intrvalId);
    }
  });
});
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
