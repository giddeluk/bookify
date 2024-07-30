const displaySection = document.querySelector(".displaySection");
const addBookPopupButton = document.querySelector(".addBookPopup");
const outputDiv = document.querySelector("#output-div");

const dialog = document.querySelector("#dialog");
const closePopup = document.querySelector("#close-popup");
const inputName = document.querySelector("#input-name");
const inputAuthor = document.querySelector("#input-author");
const inputPages = document.querySelector("#input-pages");
const inputReadStatus = document.querySelector("#input-read-status");
const inputSubmit = document.querySelector("#input-submit");

addBookPopupButton.addEventListener("click", () => {
  dialog.showModal();
});
closePopup.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
});
inputSubmit.addEventListener("click", (event) => {
  if (
    inputName.value == "" ||
    inputAuthor.value == "" ||
    inputPages.value == ""
  ) {
  } else {
    event.preventDefault();
    dialog.close();
    addBookToLibrary();
    inputName.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
  }
});
// On load
document.addEventListener("DOMContentLoaded", (e) => {
  displayBooks();
});

// Books Array
const myLibrary = [
  new Book("Javascript for Beginners", "Jonas Zipperman", 230, "true"),
  new Book("React for dummies", "Blondie Wavy", 197, "false"),
  new Book("Introductory guide to SQL", "Patrick Lewy", 59, "true"),
  new Book("How do databases work?", "Stefanovic Law", 83, "false"),
  new Book("Node.js A-Z", "Dan Piecek", 120, "false"),
];

// Book Object constructor
function Book(name, author, pages, readStatus) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}
Book.prototype.setReadStatus = function (condition) {
  this.readStatus = condition;
};
// Add the Book to the Books Array
function addBookToLibrary() {
  // Create a New book object
  let book = new Book(
    inputName.value,
    inputAuthor.value,
    inputPages.value,
    inputReadStatus.value
  );
  // Append it to the array
  myLibrary.push(book);
  console.log(myLibrary);
  // Display
  displayBooks();
}

// Display books
function displayBooks() {
  outputDiv.innerHTML = "";
  myLibrary.forEach((item, index) => {
    let obj = myLibrary[index];
    let createdCard = document.createElement("div");
    let createdName = document.createElement("p");
    let hr = document.createElement("hr");
    let createdAuthor = document.createElement("p");
    let createdPages = document.createElement("p");
    let createdReadStatus = document.createElement("p");
    let createdActionsDiv = document.createElement("div");

    let createdDeleteBtn = document.createElement("button");
    let createdToggleButton = document.createElement("button");

    createdCard.setAttribute("id", "card");
    createdName.setAttribute("id", "card-name");
    createdAuthor.setAttribute("id", "card-author");
    createdPages.setAttribute("id", "card-pages");
    createdActionsDiv.setAttribute("id", "actions");

    // Delete button
    createdDeleteBtn.setAttribute("id", "delete-btn");
    // Read and Unread
    createdToggleButton.setAttribute("id", "toggle-button");
    createdReadStatus.setAttribute("id", "read-status");
    // On Delete
    createdDeleteBtn.addEventListener("click", (event) => {
      myLibrary.splice(index, 1);
      displayBooks();
    });
    // On read toggled
    createdToggleButton.addEventListener("click", () => {
      if (obj.readStatus == "true") {
        obj.setReadStatus("false");
        displayBooks();
      } else if (obj.readStatus == "false") {
        obj.setReadStatus("true");
        displayBooks();
      }
    });

    createdName.textContent = item.name;
    createdAuthor.textContent = `Author: ${item.author}`;
    createdPages.textContent = `Pages: ${item.pages}`;

    switch (obj.readStatus) {
      case "true":
        createdReadStatus.textContent = "This book has BEEN read";
        createdReadStatus.style.color = "Green";
        break;
      case "false":
        createdReadStatus.textContent = "This book has NOT BEEN read";
    }
    createdDeleteBtn.textContent = "Delete";
    createdToggleButton.textContent = "Toggle read status";

    createdCard.appendChild(createdName);
    createdCard.appendChild(hr);
    createdCard.appendChild(createdAuthor);
    createdCard.appendChild(createdPages);
    createdCard.appendChild(createdReadStatus);

    createdActionsDiv.appendChild(createdDeleteBtn);
    createdActionsDiv.appendChild(createdToggleButton);
    createdCard.appendChild(createdActionsDiv);

    outputDiv.appendChild(createdCard);
  });
}
