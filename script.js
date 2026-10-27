const myLibrary = [];
let booksInLibrary = 0;

function Book(name, author, pages) {
  if (!new.target) throw Error("Must use new for constructor");

  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = "Want to read";
}

function displayBooks() {
  const books = myLibrary.length;
  const bookSection = document.querySelector("#book-cards");

  for (let i = booksInLibrary; i < books; i++) {
    const name = myLibrary[i].name;
    const author = myLibrary[i].author;
    const pages = myLibrary[i].pages;
    const status = myLibrary[i].status;

    let div = document.createElement("div");
    div.classList.add("book-card");

    let titleText = document.createElement("h3");
    titleText.textContent = `Title: ${name}`;

    let authorText = document.createElement("h3");
    authorText.textContent = `Author: ${author}`;

    let pageText = document.createElement("h3");
    pageText.textContent = `Pages: ${pages}`;

    let statusText = document.createElement("h3");
    statusText.textContent = `Status: ${status}`;

    bookSection.appendChild(div);

    div.appendChild(titleText);
    div.appendChild(authorText);
    div.appendChild(pageText);
    div.appendChild(statusText);
  }
}

function addBookToLibrary() {
  //takes params from a form

  const form = document.querySelector("#my-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.querySelector("#title-input");
    const authorInput = document.querySelector("#author-input");
    const pagesInput = document.querySelector("#pages-input");

    const name = nameInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;

    if (name == "" || author == "" || pages == "")
      alert("Please add the required information");

    const book = new Book(name, author, pages);

    //push book into array

    myLibrary.push(book);

    displayBooks();
    booksInLibrary++;
  });
}

addBookToLibrary();
