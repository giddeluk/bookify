const displaySection = document.querySelector(".displaySection");
const addBookPopupButton = document.querySelector(".addBookPopup");
const outputDiv = document.querySelector("#output-div");

const dialog = document.querySelector("#dialog");

addBookPopupButton.addEventListener("click", () => {
    dialog.showModal();
});