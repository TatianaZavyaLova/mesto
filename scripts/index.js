const editProfileButton = document.querySelector('.profile__edit-button')
const popupProfileEdit = document.querySelector('.popup')
const closePopupProfileButton = document.querySelector('.popup__close')
const profileName = document.querySelector('.profile__title')
const profileJob = document.querySelector('.profile__subtitle')
const formProfileElement = document.querySelector('.popup__form')
const nameProfileInput = document.querySelector('.popup__input_type_name')
const jobProfileInput = document.querySelector('.popup__input_type_job')
const addButton = document.querySelector('.profile__add-button')
const addPopup = document.querySelector('.add-popup')
const closeAddPopupButton = document.querySelector('.add-popup__close')
const cardTitle = document.querySelector('.card__title')
const cardImage = document.querySelector('.card__image')
const formAddElement = document.querySelector('.add-popup__form')
const addCardInput = document.querySelector('.add-popup__input_type_place')
const addCardImage = document.querySelector('.add-popup__input_type_image')
const cardElement = document.querySelector('.cards')
const templateElement = document.querySelector('.cards-template')
const imagePopup = document.querySelector('.image-popup')
const closeImagePopupButton = document.querySelector('.image-popup__close')
const imagePopupPhoto = document.querySelector('.image-popup__image')
const imagePopupTitle = document.querySelector('.image-popup__title')
const addPopupContainer = document.querySelector('.add-popup__container');
const popupProfileEditContainer = document.querySelector('.popup__container');

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}; 

function getCard(e) {
  return e.currentTarget.closest('.card');
};

function createCard(name, link) {
  const card = templateElement.content
  .cloneNode(true)
  .querySelector('.card');
  const cardPhoto = card.querySelector('.card__image');
  const cardLike = card.querySelector('.card__like');
  card.querySelector('.card__title').textContent = name;
  cardPhoto.src = link;
  cardPhoto.alt = name;
  cardLike.addEventListener('click', function(e) {
    cardLike.classList.toggle('card__like_active');
  });
  card.querySelector('.card__trash').addEventListener('click', function(e) {
    const card = getCard(e);
    card.remove();
  });
  cardPhoto.addEventListener('click', function(e) {
    openImagePopup(name, link);
  });  
  return card;
};

function addCard(name, link) {
  const card = createCard(name, link);
  cardElement.prepend(card);
};

function handleCardSubmit(e) {
  e.preventDefault();
  const name = addCardInput.value;
  const link = addCardImage.value;
  addCard(name, link);
  closePopup(addPopup);
  formAddElement.reset();
};

initialCards.forEach(e => addCard(e.name, e.link));

formAddElement.addEventListener('submit', handleCardSubmit);

function openImagePopup(name, imageURL) {
  openPopup(imagePopup);
  imagePopupPhoto.src = imageURL;
  imagePopupPhoto.alt = name;
  imagePopupTitle.textContent = name;
};

closeImagePopupButton.addEventListener('click', () => closePopup(imagePopup));

function openAddPopup() {
  formAddElement.reset();
  resetFormState(addFormConfig);
  openPopup(addPopup);
};

addButton.addEventListener('click', openAddPopup);

closeAddPopupButton.addEventListener('click', () => closePopup(addPopup));

function openPopupProfile() {
  openPopup(popupProfileEdit);
  nameProfileInput.value = profileName.textContent;
  jobProfileInput.value = profileJob.textContent;
};

editProfileButton.addEventListener('click', openPopupProfile)

closePopupProfileButton.addEventListener('click', () => closePopup(popupProfileEdit));

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameProfileInput.value;
  profileJob.textContent = jobProfileInput.value;
  closePopup(popupProfileEdit);
};

formProfileElement.addEventListener('submit', handleProfileFormSubmit);

function CloseByOverLay(popup, container) {
  container.addEventListener('click', (event) => event.stopPropagation());
  popup.addEventListener('click', () => closePopup(popup));
};

CloseByOverLay(popupProfileEdit, popupProfileEditContainer);
CloseByOverLay(addPopup, addPopupContainer);

function closeByEsc (popup) {
  document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === "Escape") {
      closePopup(popup);
    };
  });
};

closeByEsc(popupProfileEdit);
closeByEsc(addPopup);