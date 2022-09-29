const currentDateTime = document.querySelector('.date-time');
const currentDate = new Date();
const dateFormat = {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};
currentDateTime.textContent = currentDate.toLocaleDateString('en-US', dateFormat);