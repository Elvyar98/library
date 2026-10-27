const myLibrary = [];

function Book(name, author, pages) {
  if (!new.target) throw Error("Must use new for constructor");

  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = "Want to read";
}

function addBookToLibrary() {
  //takes params from a form
  let name = null;
  let author = null;
  let pages = null;

  const form = document.querySelector("#my-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.querySelector("#title-input");
    const authorInput = document.querySelector("#author-input");
    const pagesInput = document.querySelector("#pages-input");
    name = nameInput.value;
    author = authorInput.value;
    pages = pagesInput.value;

    if (name == null || author == null || pages == null)
      return "Please add the required information";
    const book = new Book(name, author, pages);
    //push book into array
    myLibrary.push(book);
  });
}

function displayBooks() {}
addBookToLibrary();
