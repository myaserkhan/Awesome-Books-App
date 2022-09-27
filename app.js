const list = document.getElementById('lists');
const form = document.querySelector('form');
const author = document.getElementById('atr');
const title = document.getElementById('ttl');

const bookCollection = [];

function collection(title, author) {
  this.title = title;
  this.author = author;
}

function alocalStorage() {
  const key = title.value;
  localStorage.setItem(key, JSON.stringify(bookCollection));
}

function newCollection() {
  // eslint-disable-next-line new-cap
  const newCollectionList = new collection(title.value, author.value);
  bookCollection.push(newCollectionList);
  alocalStorage();
}

form.addEventListener('submit', newCollection);