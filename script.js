const checkboxSave = document.getElementById('cb-save');
const loginButton = document.querySelector('.login-form__sig-in');

loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(`Состояние чекбокса: ${checkboxSave.checked}`);
});
