(() => {
    const showButton = document.querySelector('.section-form__button');
    const form = document.querySelector('.section-form__form');

    const showForm = () => {
        form.classList.remove('d-none');
        showButton.classList.add('d-none');
    };

    showButton.addEventListener('click', showForm);
})();
