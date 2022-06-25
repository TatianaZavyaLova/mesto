const submitProfileButton = document.querySelector('.popup__button');
const inputList = Array.from(document.querySelectorAll('.popup__input'));
const selectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const isInputValid = inputElement => {
    return inputElement.checkValidity();
}

const activateError = (errorElement, message) => {
    const inputElement = errorElement.closest('.popup__input');
    inputElement.classList.add('popup__input__invalid');
    errorElement.textContent = message;
}

const resetError = (errorElement) => {
    const inputElement = errorElement.closest('.popup__input');
    inputElement.classList.remove('popup__input__invalid');
    errorElement.textContent = " ";
}

submitProfileButton.addEventListener('click', () => {
  let isFormValid = true;

  inputList.forEach(inputElement => {
    const errorElement = document.querySelector(`error-${inputElement.id}`);

    if (!isInputValid(inputElement)) {
        isFormValid = false;
        activateError(errorElement, inputElement.validationMessage);
    } else {
        resetError(errorElement);
    }
  });
  console.log(isFormValid);
})

function enableValidation(selectors) {

}

enableValidation(selectors);


