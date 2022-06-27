const profileFormConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const addFormConfig = {
  formSelector: '.add-popup__form',
  inputSelector: '.add-popup__input',
  submitButtonSelector: '.add-popup__button',
  inactiveButtonClass: 'add-popup__button_disabled',
  inputErrorClass: 'add-popup__input_type_error',
  errorClass: 'add-popup__error_visible'
};

function getErrorElementForInputElement(inputElement)
{
  return document.getElementById("error-" + inputElement.id);
}

function setErrorForInputElement(inputElement, formConfig)
{
  inputElement.classList.add(formConfig.inputErrorClass);

  const errorElement = getErrorElementForInputElement(inputElement);
  errorElement.innerText = inputElement.validationMessage;
  errorElement.classList.add(formConfig.errorClass);
}

function clearErrorForInputElement(inputElement, formConfig)
{
  inputElement.classList.remove(formConfig.inputErrorClass);

  const errorElement = getErrorElementForInputElement(inputElement);
  errorElement.innerText = "";
  errorElement.classList.remove(formConfig.errorClass);
}

function setSubmitState(submitElement, isValid, inactiveButtonClass)
{
  if (isValid)
  {
    submitElement.classList.remove(inactiveButtonClass);
  }
  else
  {
    submitElement.classList.add(inactiveButtonClass);
  }
  submitElement.disabled = !isValid;
}

function validateForm(inputElements, submitElement, formConfig)
{
  let isValid = true;

  inputElements.forEach((inputElement) =>
    {
      if (inputElement.checkValidity())
      {
        clearErrorForInputElement(inputElement, formConfig);
      }
      else
      {
        setErrorForInputElement(inputElement, formConfig);
        isValid = false;
      }
    });

  setSubmitState(submitElement, isValid, formConfig.inactiveButtonClass);
}

function enableValidation(formConfig)
{
  const form = document.querySelector(formConfig.formSelector);
  const inputs = Array.from(form.querySelectorAll(formConfig.inputSelector));
  const submit = form.querySelector(formConfig.submitButtonSelector);

  form.addEventListener('input', () => validateForm(inputs, submit, formConfig));
}

enableValidation(profileFormConfig);
enableValidation(addFormConfig);