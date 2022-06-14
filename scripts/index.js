const editButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const clousePopupButton = document.querySelector('.popup__clouse')
const addButton = document.querySelector('.profile__add-button')
const profileName = document.querySelector('.profile__title')
const profileJob = document.querySelector('.profile__subtitle')
const formElement = document.querySelector('.popup__form')
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_job')
const addPopup = document.querySelector('.add-popup')
const clouseAddPopupButton = document.querySelector('.add-popup__clouse')
const cardTitle = document.querySelector('.card__title')
const cardImage = document.querySelector('.card__image')
const addFormElement = document.querySelector('.add-popup__form')
const addCardInput = document.querySelector('.add-popup__input_type_place')
const addCardImage = document.querySelector('.add-popup__input_type_image')
const cardElement = document.querySelector('.cards')
const templateElement = document.querySelector('.cards-template')
const like = document.querySelector('.card__like')
const likeActive = document.querySelector('.card__like_active')
const imagePopup = document.querySelector('.image-popup')
const clouseImagePopupButton = document.querySelector('.image-popup__clouse')
const imagePopupPhoto = document.querySelector('.image-popup__image')
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function cardEvent(e) {
  return e.currentTarget.closest('.card');
};

function createCard(name, link) {
  const card = templateElement.content
  .cloneNode(true)
  .querySelector('.card');
  card.querySelector('.card__title').textContent = name;
  card.querySelector('.card__image').src = link;
  card.querySelector('.card__like').addEventListener('click', function(e) {
    card.querySelector('.card__like').classList.toggle('card__like_active');
  });
  card.querySelector('.card__trash').addEventListener('click', function (e) {
    const card = cardEvent(e);
    card.remove();
  });
  card.querySelector('.card__image').addEventListener('click', function (e) {
    openImagePopup(name, link);
  });  
  return card;
};

function addCard(name, link) {
  const card = createCard(name, link);
  cardElement.prepend(card);
};

function handlerCardSubmit(e) {
  e.preventDefault();
  const name = addCardInput.value;
  const link = addCardImage.value;
  addCard(name, link);
  initialCards(reset);
  clouseAddPopup();
};

initialCards.forEach(e => addCard(e.name, e.link));

addFormElement.addEventListener('submit', handlerCardSubmit);

function openImagePopup(name, imageURL) {
  imagePopup.classList.add('image-popup_opened');
  imagePopup.querySelector('.image-popup__image').src = imageURL;
  imagePopup.querySelector('.image-popup__title').textContent = name;
}

function clouseImagePopup() {
  imagePopup.classList.remove('image-popup_opened');
}

clouseImagePopupButton.addEventListener('click', clouseImagePopup)

function openAddPopup() {
  addPopup.classList.add('add-popup_opened');
}

addButton.addEventListener('click', openAddPopup);

function clouseAddPopup() {
  addPopup.classList.remove('add-popup_opened');
}

clouseAddPopupButton.addEventListener('click', clouseAddPopup)

function addFormSubmitHandler (evt) {
  evt.preventDefault();
  clouseAddPopup();
}

addFormElement.addEventListener('submit', addFormSubmitHandler);

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

editButton.addEventListener('click', openPopup)

function clousePopup() {
  popup.classList.remove('popup_opened');
}

clousePopupButton.addEventListener('click', clousePopup)

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  clousePopup();
}

formElement.addEventListener('submit', formSubmitHandler);