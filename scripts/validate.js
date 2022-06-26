const popupProfileInputElements = Array.from(document.querySelectorAll('.popup__input'));
const popupProfileSubmit = document.querySelector('.popup__button');
const selectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


function getCard(e) {
  return e.currentTarget.closest('.card');
};



function getErrorElementForInputElement(inputElement)
{
  return document.getElementById("error-" + inputElement.id);
}

function setErrorForInputElement(inputElement)
{
  getErrorElementForInputElement(inputElement).innerText = inputElement.validationMessage;
}

function clearErrorForInputElement(inputElement)
{
  getErrorElementForInputElement(inputElement).innerText = "";
}

function validateForm(inputElements, submitElement)
{
  let isValid = true;

  inputElements.forEach((inputElement) =>
    {
      if (!inputElement.checkValidity())
      {
        setErrorForInputElement(inputElement);
        isValid = false;
      }
      else
      {
        clearErrorForInputElement(inputElement);
      }
    });

  submitElement.disabled = !isValid;
}

formProfileElement.addEventListener('input', () => validateForm(popupProfileInputElements, popupProfileSubmit));
