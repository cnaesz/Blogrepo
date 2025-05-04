const shelf = document.getElementById('shelf');
const addBookbtn = document.getElementById('js-add-book');

let bookCount = 1;

addBookbtn.addEventListener('click', () => {
  const book = document.createElement('div');
  book.classList.add('book');
  book.textContent = `book ${bookCount++}`;
  shelf.appendChild(book);
})