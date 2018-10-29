document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready')

  var signInBtn = document.querySelector('.signin'),
  modalWindow = document.querySelector('.modal'),
  closeBtn = document.querySelector('.close'),
  submitBtn = document.querySelector('.submit'),
  userField = document.querySelector('#user'),
  passField = document.querySelector('#pass');
  
  submitBtn.addEventListener('click', (e) => {
    userField.setAttribute('class', 'error');
    passField.setAttribute('class', 'error');
    e.stopPropagation();
  });
  userField.addEventListener('click', (e) => {
    userField.removeAttribute('class');
    e.stopPropagation();
  });
  passField.addEventListener('click', (e) => {
    passField.removeAttribute('class');
    e.stopPropagation();
  });
  
  signInBtn.addEventListener('click', function() {
    modalWindow.style.display = 'block';
  });
  modalWindow.addEventListener('click', () => {
    modalWindow.setAttribute('style', 'display: none;');
  });
});