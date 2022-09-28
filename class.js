class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.data = [];
  }



  addBook(book) {
    if(title.value != "" && author.value != "") {
      this.data.push(book);
      localStorage.setItem('library', JSON.stringify(this.data));
      addToUI(book);
    }
  }

  removeBook(id) {
    const book = document.getElementById(id);
    book.remove();
    this.data = this.data.filter((bookObj) => bookObj.id !== id);
    localStorage.setItem('library', JSON.stringify(this.data));
  }
}

const library = new Library();

function getInput() {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const book = new Book(title.value, author.value);
  return book
}

function addToUI(bookObj) {
  const bookList = document.getElementById('lists');
  const book = document.createElement('li');
  book.setAttribute('id', bookObj.id);
  book.innerHTML = `<p>"${bookObj.title}" by ${bookObj.author}</p>`;
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'effacer')
  deleteBtn.innerHTML = 'Remove';
  deleteBtn.addEventListener('click', () => library.removeBook(bookObj.id));
  book.appendChild(deleteBtn);
  bookList.appendChild(book);
}

// Add Button
const addButton = document.getElementById('btn');
addButton.addEventListener('click', () => {
  const book = getInput();
  library.addBook(book);
  bookList.style.border = '2px solid black';
});

// Load page
window.onload = () => {
  library.data = JSON.parse(localStorage.getItem('library' || '[]'));
  if (library.data === null) {
    library.data = [];
    return;
  }

  library.data.forEach((book) => addToUI(book));
};