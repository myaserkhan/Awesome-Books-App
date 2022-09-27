// class Book {
//   constructor (title, author) {
//     this.title = title;
//     this.author = author;
//   }
// }

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const listBooks = document.querySelector('.container ul');
const myButton = document.querySelector('#btn-list');

myButton.addEventListener('click', (e) => {
  if(title.value != "" && author.value != "") {
    e.preventDefault();

    const titleBooks = document.createElement('li');
    titleBooks.innerHTML = title.value;
    listBooks.appendChild(titleBooks);

    const authorBooks = document.createElement('li');
    authorBooks.innerHTML = author.value;
    listBooks.appendChild(authorBooks);

    const remove = document.createElement('button');
    remove.setAttribute('class', 'remove');
    remove.innerText = 'Remove'
    listBooks.appendChild(remove);

    const hr = document.createElement('hr');
    listBooks.appendChild(hr);
  }
})

// Event: Remove a Book 


