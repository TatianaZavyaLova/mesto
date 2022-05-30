const editButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const clousePopupButton = document.querySelector('.popup__clouse')
const addButton = document.querySelector('.profile__add-button')
const profileName = document.querySelector('.profile__title')
const profileJob = document.querySelector('.profile__subtitle')
const formElement = document.querySelector('.popup__form')
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_job')

function popupOpen() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

editButton.addEventListener('click', popupOpen)

function popupClouse() {
  popup.classList.remove('popup_opened');
}

clousePopupButton.addEventListener('click', popupClouse)

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClouse();
}

formElement.addEventListener('submit', formSubmitHandler);