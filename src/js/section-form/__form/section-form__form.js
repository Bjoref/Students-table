(() => {
const form = document.querySelector('.section-form__form');
const showButton = document.querySelector('.section-form__button');


const inputGroup = document.querySelectorAll('.seciton-form__input');

const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const patronymicInput = document.querySelector('#patronymic');
const birthdateInput = document.querySelector('#birthdate');
const studyyearInput = document.querySelector('#studyyear');
const facultyInput = document.querySelector('#faculty');

let birthdateInputArray = [];
let validArray = [];
let uniqArray;
let studentPreObject = {}
let validCounter = 0;
let errorText = '';

const addValid = (input) => {
  let error = input.nextSibling.nextSibling;
  error.classList.add('d-none')
  error.textContent = '';
  input.classList.add('valid');
  input.classList.remove('invalid');
  input.classList.remove('mb-1');
  validArray.push(input);
  const makeUniq = (validArray) => {
    uniqArray = new Set(validArray);
    return [...uniqArray];
  }
  makeUniq(validArray)
}

const addInValid = (input, errorText) => {
  let error = input.nextSibling.nextSibling;
  error.classList.remove('d-none')
  input.classList.add('mb-1');
  input.classList.add('invalid');
  error.textContent = errorText;
  error.classList.add('mb-1');
  input.classList.remove('valid');
  errorText = '';
  validArray.pop();
}

const removeInvalid = (input) => {
  let error = input.nextSibling.nextSibling;
  error.classList.add('d-none')
  error.textContent = '';
  input.classList.remove('invalid');
  input.classList.remove('mb-1');
}

const birthdateValidation = () => {
    let input = event.target;
    let length = birthdateInputArray.length
    let inputLength = input.value.length
    let error = input.nextSibling.nextSibling;

    switch (inputLength) {
      case 2:
        input.value = input.value + '/'
      break;
      case 5:
        input.value = input.value + '/'
      break;
    };

    let theEvent = event || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);


    if(length <= 9) {
      if (Number(key)) {
        birthdateInputArray.push(key)
        switch (length) {
          case 1:
            birthdateInputArray.push('/')
          break;
          case 4:
            birthdateInputArray.push('/')
          break;
        };
      };
    };

    if(inputLength == 3) {
      let testSting = input.value.slice(0, -1)
      console.log(testSting)
      if(Number(testSting) > 32) {
        errorText = 'Указано некорректное количество дней';
        addInValid(input, errorText);
      };
    };

    if(inputLength == 6) {
      let testSting = input.value.slice(3).slice(0, -1)
      if(Number(testSting) > 12) {
        errorText = 'Указано некорректное количество месяцев';
        addInValid(input, errorText);
      };
    }

    if(inputLength == 10) {
      let days = input.value.slice(0, -8)
      let month = input.value.slice(3, -5)
      let year = input.value.slice(-4)
      if(days > 32 || month > 12 || year < 1900 || year > 2022) {
        errorText = 'Указана некорректная дата';
        addInValid(input, errorText);
      }
    };

    let date = new Date()
    // console.log(Date.now());
    // console.log(date.getFullYear());
    // console.log(date.getMonth());
    // console.log(date.getDate());
};

const inputValidation = () => {
    let input = event.target;
    switch (input) {
        case nameInput:
          if(input.value.length >= 3) {
            addValid(input);
            studentPreObject.name = input;
          } else {
            errorText = 'Минимум 3 символа'
            addInValid(input, errorText);
            delete studentPreObject.name;
          };
        break;
        case surnameInput:
          if(input.value.length >= 3) {
            addValid(input);
            studentPreObject.surname = input;
          } else {
            errorText = 'Минимум 3 символа'
            addInValid(input, errorText);
            delete studentPreObject.surname;
          };
        break;
        case patronymicInput:
          if(input.value.length >= 3) {
            addValid(input);
            studentPreObject.patronymic = input;
          } else {
            errorText = 'Минимум 3 символа';
            addInValid(input, errorText);
            delete studentPreObject.patronymic;
          };
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
      };
      // for (key in studentPreObject) {
      //   console.log(key)
      // }
};

inputGroup.forEach((input) => {
    input.addEventListener('input', inputValidation);
    input.addEventListener('keyup', inputValidation);
    if(input.id == 'name' || input.id == 'patronymic' || input.id == 'surname') {
      input.addEventListener('keypress', noDigitsNEng);
    }
});

birthdateInput.addEventListener('keydown', () => {
  let keyNum = window.event.keyCode
  if(keyNum == 8) {
    removeInvalid(event.target);
    birthdateInputArray = [];
    let string = event.target.value;
    let last = string.slice(-1);
    if (last == '/') {
      string = string.slice(0, -1);
      event.target.value = string;
    }
  }
})

birthdateInput.addEventListener('cut', (event) => {
  console.log(event.target)
})

const noDigitsNEng= (event) => {
  if ("1234567890".indexOf(event.key) != -1 || "qwertyuiopasdfghjklzxcvbnm".indexOf(event.key) != -1)
    event.preventDefault();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.classList.add('d-none');
  showButton.classList.remove('d-none');
});

})();