const openButton = document.querySelector("#openOverlay");
const closeElement = document.querySelector('#closeOverlay');
const overlay = document.querySelector('.overlay');

openButton.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.left = `0`;
})
closeElement.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.left = `100%`;
});

const body = document.body;
const successModal = createModal("The message has been sent, thank you!");

openButton.addEventListener("click", (e) => {
  body.appendChild(successModal);
});