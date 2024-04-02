const openModal = document.getElementById('submitEmail');
const modal = document.getElementById('newsletterModal');
const container = document.getElementById('container');
const closeModal = document.getElementById('closeModal');
const form = document.querySelector('form');
const modalMessage = document.getElementById('modalMessage');

openModal.addEventListener('click', () => {
  const emailInput = document.getElementById('emailInput');
  const email = emailInput.value.trim();

  if (email === '') {
    displayMessage("Please enter an email");
  } else {
    modal.show();
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    container.style.display = 'none';
  }
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  container.style.display = 'flex';
});

function displayMessage(message) {
  const emailInput = document.getElementById('emailInput');
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  modalMessage.innerHTML = '';

  if (email.match(emailPattern)) {
    const imageElement = document.createElement('img');
    imageElement.src = 'assets/images/icon-success.svg'; 

    const headingElement = document.createElement('h1');
    headingElement.textContent = 'Thanks for subscribing!';

    const messageElement = document.createElement('p');
    messageElement.textContent = message;

    const messageContainer = document.createElement('div');
    messageContainer.appendChild(imageElement);
    messageContainer.appendChild(headingElement);
    messageContainer.appendChild(messageElement);

    imageElement.style.marginBottom = '15px';
    headingElement.style.marginBottom = '15px';
    messageElement.style.marginBottom = '15px';
    modalMessage.style.display = 'block';

    modalMessage.appendChild(messageContainer);
    modalMessage.style.display = 'block';
  } else {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;

    modalMessage.appendChild(messageElement);
    modalMessage.style.display = 'block';
  }
}

function hideMessage() {
  modalMessage.textContent = '';
  modalMessage.style.display = 'none';
}

function validateEmail() {
  const emailInput = document.getElementById('emailInput');
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.match(emailPattern)) {
    displayMessage("A confirmation email has been sent to " + email + ". Please open it and click the button inside to confirm your subscription.");
  } else {
    displayMessage("Invalid email format");
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  hideMessage();
  validateEmail();
});