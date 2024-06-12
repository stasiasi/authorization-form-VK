let checkboxSave = document.querySelector('.checkbox-save');
let loginButton = document.querySelector('.login-form__button');

loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Состояние чекбокса: " + checkboxSave.checked);
});
