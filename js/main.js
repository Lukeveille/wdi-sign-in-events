document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready')

  var signInBtn = document.querySelector('.signin'),
  modalWindow = document.querySelector('.modal'),
  closeBtn = document.querySelector('.close'),
  submitBtn = document.querySelector('.submit'),
  userField = document.querySelector('#user'),
  passField = document.querySelector('#pass');
  
  submitBtn.addEventListener('click', (event) => {
    userField.setAttribute('class', 'error');
    passField.setAttribute('class', 'error');
    event.stopPropagation();
  });
  userField.addEventListener('click', (event) => {
    userField.removeAttribute('class');
    event.stopPropagation();
  });
  passField.addEventListener('click', (event) => {
    passField.removeAttribute('class');
    event.stopPropagation();
  });
  
  signInBtn.addEventListener('click', () => {
    modalWindow.style.display = 'block';
  });
  modalWindow.addEventListener('click', () => {
    modalWindow.setAttribute('style', 'display: none;');
  });
});