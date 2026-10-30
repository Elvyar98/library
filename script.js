const myLibrary = [];

function Book(name, author, pages) {
  if (!new.target) throw Error("Must use new for constructor");

  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = "Want to read";

  this.changeStatus = () => {
    if (this.status == "Finished Reading") this.status = "Want to read";
    else this.status = "Finished Reading";
  };
}

function displayBooks() {
  const books = myLibrary.length;
  const bookSection = document.querySelector("#book-cards");
  bookSection.textContent = "";

  for (let i = 0; i < books; i++) {
    const name = myLibrary[i].name;
    const author = myLibrary[i].author;
    const pages = myLibrary[i].pages;
    const status = myLibrary[i].status;

    let div = document.createElement("div");
    div.classList.add("book-card");
    div.id = myLibrary[i].id;
    console.log(div.id);

    let titleText = document.createElement("h3");
    titleText.textContent = `Title: ${name}`;

    let authorText = document.createElement("h3");
    authorText.textContent = `Author: ${author}`;

    let pageText = document.createElement("h3");
    pageText.textContent = `Pages: ${pages}`;

    let statusText = document.createElement("h3");
    statusText.textContent = `Status: ${status}`;

    let removebtn = document.createElement("button");
    removebtn.textContent = "Remove book";

    let statusbtn = document.createElement("button");
    statusbtn.textContent = "Finished Reading";

    statusbtn.addEventListener("click", () => {
      myLibrary.forEach((element) => {
        if (element.id == div.id) element.changeStatus();
      });
      displayBooks();
    });

    removebtn.addEventListener("click", () => {
      const index = myLibrary.findIndex(function (element) {
        if (element.id == div.id) {
          return true;
        } else return false;
      });

      myLibrary.splice(index, 1);

      displayBooks();
    });

    bookSection.appendChild(div);

    div.appendChild(titleText);
    div.appendChild(authorText);
    div.appendChild(pageText);
    div.appendChild(statusText);
    div.appendChild(removebtn);
    div.appendChild(statusbtn);
  }
}

function addBookToLibrary() {
  //takes params from a form
  const form = document.querySelector("#my-form");
  const dialog = document.querySelector("dialog");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.querySelector("#title-input");
    const authorInput = document.querySelector("#author-input");
    const pagesInput = document.querySelector("#pages-input");

    const name = nameInput.value.trim();
    const author = authorInput.value.trim();
    const pages = pagesInput.value.trim();

    if (name == "" || author == "" || pages == "") {
      alert("Please add the required information");
      return 0;
    }

    dialog.close();
    const book = new Book(name, author, pages);

    //push book into array

    myLibrary.push(book);

    displayBooks();
  });
}

const dialog = document.querySelector("dialog");
dialog.addEventListener("close", () => {
  const form = document.querySelector("#my-form");
  form.reset();
});

addBookToLibrary();
