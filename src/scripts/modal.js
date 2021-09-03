const rules = document.querySelector('.rules__button')
const modalRules = document.querySelector('.modal-rules')
const closeModalRules = document.querySelector('.modal-rules__box__nav__close')

rules.addEventListener('click', () => {
  modalRules.classList.add('active')
})

closeModalRules.addEventListener('click', () => {
  modalRules.classList.remove('active')
})
