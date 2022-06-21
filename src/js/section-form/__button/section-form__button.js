(() => {
    const showButton = document.querySelector('.section-form__button');
    const submitButton = document.querySelector('.section-form__submit-button');
    const form = document.querySelector('.section-form__form');
    const errorField = document.querySelector('.section-form__button-error');

    const showForm = () => {
        form.classList.remove('d-none');
        showButton.classList.add('d-none');
        document.querySelector('.section-form__submit-button').classList.add('disabled');
    };

    showButton.addEventListener('click', showForm);

    submitButton.addEventListener('mouseover', (element) => {
        if(element.target.classList.contains('disabled')) {
            errorField.classList.remove('d-none')
        };
    });
    submitButton.addEventListener('mouseout', (element) => {
        if(element.target.classList.contains('disabled')) {
            errorField.classList.add('d-none')
        };
    });
})();
