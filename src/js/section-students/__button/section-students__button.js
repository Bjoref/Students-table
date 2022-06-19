(() => {
    const buttonGroup = document.querySelectorAll('.section-students__button');
    const showButton = document.querySelector('.section-students__button_show')
    const hideButton = document.querySelector('.section-students__button_hide')
    const table = document.querySelector('.section-students__table')

    buttonGroup.forEach((button) => {
        button.addEventListener('click', (element) => {
            if(element.target.classList.contains('section-students__button')) {
                if(element.target.classList.contains('section-students__button_show')) {
                    table.classList.remove('d-none');
                    hideButton.classList.remove('d-none');
                    showButton.classList.add('d-none');
                };
                if(element.target.classList.contains('section-students__button_hide')) {
                    table.classList.add('d-none');
                    showButton.classList.remove('d-none');
                    hideButton.classList.add('d-none');
                }; 
            };
        });
        button.addEventListener('mouseover', (element) => {
            if(element.target.classList.contains('section-students__button')) {
                element.target.childNodes[1].setAttribute('src', "src/img/section-students/__arrow-icon/section-students__arrow-icon_hover.svg")
            } else if (element.target.classList.contains('section-students__arrow-icon')) {
                element.target.setAttribute('src', "src/img/section-students/__arrow-icon/section-students__arrow-icon_hover.svg")
                
            };
        });
        button.addEventListener('mouseout', (element) => {
            if(element.target.classList.contains('section-students__button')) {
                element.target.childNodes[1].setAttribute('src', "src/img/section-students/__arrow-icon/section-students__arrow-icon.svg")
            } else if (element.target.classList.contains('section-students__arrow-icon')) {
                element.target.setAttribute('src', "src/img/section-students/__arrow-icon/section-students__arrow-icon.svg")
            };
        });
    });
})();