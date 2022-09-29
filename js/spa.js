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

const addNew = document.querySelector('#link-add');
const linkList = document.querySelector('#link-list');
const linkContact = document.querySelector('#link-contact');
const divList = document.querySelector('.container-list');
const divAdd = document.querySelector('#books');
const divContact = document.querySelector('.div-contact');

divContact.style.background = 'red';

addNew.addEventListener('click', () => {
  divList.style.display = 'none';
  divContact.style.display = 'none';
  addNew.style.color = '#006abc';
  linkList.style.color = '#000';
  linkContact.style.color = '#000';
});

linkList.addEventListener('click', () => {
  divAdd.style.display = 'none';
  divContact.style.display = 'none';
  linkList.style.color = '#006abc';
  addNew.style.color = '#000';
  linkContact.style.color = '#000';
});

linkContact.addEventListener('click', () => {
  divList.style.display = 'none';
  divAdd.style.display = 'none';
  linkContact.style.color = '#006abc';
  addNew.style.color = '#000';
  linkList.style.color = '#000';
});