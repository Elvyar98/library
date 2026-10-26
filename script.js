const myLibrary = [];

function Book(name, author, pages) {
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = "Want to read";
}

function addBookToLibrary() {
  //takes params from a form
  //creates book with params
  //push book into array
}
