// class Book {
//   constructor (title, author) {
//     this.title = title;
//     this.author = author;
//   }
// }
// const awesomeBooks = [];

// awesomeBooks.push(new Book(title.value, author.value));

// console.log(awesomeBooks);

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const listBooks = document.querySelector('.container ul');
const myButton = document.querySelector('#btn-list');
let index = 0;

myButton.addEventListener('click', (e) => {
  if (title.value !== '' && author.value !== '') {
    e.preventDefault();
    index += 1;

    const titleBooks = document.createElement('li');
    titleBooks.innerHTML = title.value;
    listBooks.appendChild(titleBooks);

    const authorBooks = document.createElement('li');
    authorBooks.innerHTML = author.value;
    listBooks.appendChild(authorBooks);

    const remove = document.createElement('button');

    // Event: Remove a Book
    remove.innerText = 'Remove';
    listBooks.appendChild(remove);
    remove.setAttribute('id', `remove-${index}`);
    const hr = document.createElement('hr');
    listBooks.appendChild(hr);
    const button = document.querySelector(`#remove-${index}`);
    button.addEventListener('click', () => {
      titleBooks.remove();
      authorBooks.remove();
      remove.remove();
      hr.remove();
    });
  }
});

// Local storage
const bookForm = document.querySelector('#addBook');
const content = JSON.parse(window.localStorage.getItem('storage'));
function check() {
  if (localStorage.getItem('storage')) {
    bookForm.elements.title.value = content.title;
    bookForm.elements.author.value = content.author;
  }
}
window.onload = check;