const inputField = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');
inputField.addEventListener('input', (e) => {
  outputField.textContent = e.currentTarget.value.trim();
})
if (inputField.contains(' ')) {
  
}