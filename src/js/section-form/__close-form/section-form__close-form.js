(() => {
    const form = document.querySelector('.section-form__form');
    const closeButton = document.querySelector('.section-form__close-form')
    const showButton = document.querySelector('.section-form__button');

    const closeForm = () => {
        form.classList.add('d-none');
        showButton.classList.remove('d-none');
    }
    closeButton.addEventListener('click', closeForm)

})();