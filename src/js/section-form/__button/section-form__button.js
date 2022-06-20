(() => {
    const showButton = document.querySelector('.section-form__button');
    const form = document.querySelector('.section-form__form');

    const showForm = () => {
        form.classList.remove('d-none');
        showButton.classList.add('d-none');
        document.querySelector('.section-form__submit-button').disabled = true;
        document.querySelector('.section-form__submit-button').classList.add('disabled');
    };

    showButton.addEventListener('click', showForm);
})();
