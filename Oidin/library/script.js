let library = [];

function renderlist() {
  let todoHtml = '';

  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    const { title, author, page } = book;
    const html = `
      <div>
        <strong>Title:</strong> ${title} <br>
        <strong>Author:</strong> ${author} <br>
        <strong>Pages:</strong> ${page}
      </div>`;
    todoHtml += html; // Append HTML to todoHtml
  }

  document.querySelector('.js-output').innerHTML = todoHtml; // Render the list
}

function addtoLibrary() {
  const booktitle = document.querySelector('.js-title');
  const authorInput = document.querySelector('.js-author');
  const pagesInput = document.querySelector('.js-pages');

  const title = booktitle.value.trim();
  const author = authorInput.value.trim();
  const page = pagesInput.value.trim();

  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(author && title)) {
    console.log('name must only contain letters and spaces!');
    return;
  }



  if (!title || !author || !page) {
    alert('All fields are required!');
    return;
  }


  if (isNaN(page) || page <= 0) {
    console.log('Page number must be a positive number!');
    return;
  }


  if (title.length > 100) {
    console.log('Title is too long! (Max 100 characters)');
    return;
  }
    

  if (title && author && page) {
    library.push({
      title,
      author,
      page,
    });

    booktitle.value = '';
    authorInput.value = '';
    pagesInput.value = '';

    renderlist();
  } else {
    console.log('All fields must be filled!');
  }
}
