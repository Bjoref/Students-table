const form = document.querySelector('.seciton-form__form');

const inputGroup = document.querySelectorAll('.seciton-form__input');

const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const patronymicInput = document.querySelector('#patronymic');
const birthdateInput = document.querySelector('#birthdate');
const studyyearInput = document.querySelector('#studyyear');
const facultyInput = document.querySelector('#faculty');

const birthdateValidation = (input) => {
    console.log(Date.now())
}

const inputValidation = () => {
    let input = event.target;
    let error = input.nextSibling.nextSibling;
    switch (input) {
        case nameInput:
          if(input.value.length >= 3) {
            error.textContent = '';
            input.classList.add('valid');
            input.classList.remove('invalid');
            input.classList.remove('mb-1');
          } else {
            input.classList.add('mb-1');
            input.classList.add('invalid');
            error.textContent = 'Минимум 3 символа';
            error.classList.add('mb-1');
            input.classList.remove('valid');
          };
          break;
        case surnameInput:
          console.log(2);
        break;
        case patronymicInput:
          console.log(3);
          break;
        case birthdateInput:
            birthdateValidation();
        break;
        case studyyearInput:
            console.log(5);
            break;
          case facultyInput:
            console.log(6);
          break;
        default:
            console.log(7);
      }
}

inputGroup.forEach((input) => {
    input.addEventListener('input', inputValidation)
})