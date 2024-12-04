const editButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup-profile");
const profileCloseButton = document.querySelector(".popup-profile__close-button");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle"); 
const inputName = document.querySelector(".popup__input-name");
const inputJob = document.querySelector(".popup__input-job");
const saveButton = document.querySelector(".popup__save-button")
const addButton = document.querySelector(".profile__add-button")
const popupCard = document.querySelector(".popup-card")
const cardCloseButton = document.querySelector(".popup-card__close-button")
const cardsContent = document.querySelector(".elements");
const cardSaveButton = document.querySelector(".popup-card__save-button")
const nameInput = document.querySelector('.popup__input-title')
const imageLinkInput = document.querySelector('.popup__input-link')


function formSubmit(event){
    event.preventDefault()
    if(inputName.value !== "" && inputJob.value !== ""){
        profileTitle.textContent = inputName.value
        profileSubtitle.textContent = inputJob.value
        popupProfile.classList.remove("popup_active")
    }
}

editButton.addEventListener("click", function(){
    popupProfile.classList.add('popup_active')
})

profileCloseButton.addEventListener("click", function(){
    popupProfile.classList.remove("popup_active")
})

saveButton.addEventListener("click", formSubmit)

addButton.addEventListener("click", function(){
    popupCard.classList.add("popup_active")
})

cardCloseButton.addEventListener("click", function(){
    popupCard.classList.remove("popup_active")
})

// const array = ['Игровая приставка', 'телефон', 'монитор', 'Клавиатура', 'видеокарта']
// console.log(array[0])


const initialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
      },
      {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
      },
      {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
      },
      {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
      },
      {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
      },
      {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
      },
]

function createCard(card){
    const contentItemTemplate = cardsContent.querySelector("#place-template").content;
    const newCard = contentItemTemplate.querySelector('.element').cloneNode(true)

    const image = newCard.querySelector('.element__image')
    const title = newCard.querySelector(".element__subtitle")
    const likeButton = newCard.querySelector(".element__like-button")

    image.src = card.link
    image.alt = card.name

    title.textContent = card.name

    likeButton.addEventListener("click", function(){
      likeButton.classList.toggle("like-active")
    })

    return newCard
}

initialCards.forEach((card) => {
  cardsContent.prepend(createCard(card))
})


function formCreateCard(event){
  event.preventDefault();
  const card = {
    name: nameInput.value,
    link: imageLinkInput.value,
  }
  cardsContent.prepend(createCard(card))
  popupCard.classList.remove('popup_active')
}

cardSaveButton.addEventListener("click", formCreateCard);
