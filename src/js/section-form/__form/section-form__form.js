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

const formTable = document.querySelector('.section-students__table');

let birthdateInputArray = [];
let validArray = [];
let uniqArray = [];
let inputsArray = []
let studentPreObject = {};
let errorText = '';
let isInvalid = false; 

const elementAdding = (object, element, tr) => {
  switch (element) {
    case 'name':
      let newTdName = document.createElement("td");
      newTdName.innerHTML = object.name;
      tr.append(newTdName);
      formTable.append(tr)
    break;
    case 'surname':
      let newTdSurname = document.createElement("td");
      newTdSurname.innerHTML = object.surname;
      tr.append(newTdSurname);
      formTable.append(tr)
    break;
    case 'patronymic':
      let newTdPatronymic = document.createElement("td");
      newTdPatronymic.innerHTML = object.patronymic;
      tr.append(newTdPatronymic);
      formTable.append(tr)
    break;
    case 'birthdate':
      let newTdBirthdate = document.createElement("td");
      newTdBirthdate.innerHTML = object.birthdate;
      tr.append(newTdBirthdate);
      formTable.append(tr)

    break;
    case 'studyyear':
      let newTdStudyyear = document.createElement("td");
      newTdStudyyear.innerHTML = object.studyyear;
      tr.append(newTdStudyyear);
      formTable.append(tr)
    break;
      case 'faculty':
        let newTdFaculty = document.createElement("td");
        newTdFaculty.innerHTML = object.faculty;
        tr.append(newTdFaculty);
        formTable.append(tr)
    break;
  };
}

const addValid = (input) => {
  let error = input.nextSibling.nextSibling;
  error.classList.add('d-none')
  error.textContent = '';
  input.classList.add('valid');
  input.classList.remove('invalid');
  input.classList.remove('mb-1');
  validArray.push(input);
  isInvalid = false;
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
  isInvalid = true;
}

const removeInvalid = (input) => {
  let error = input.nextSibling.nextSibling;
  error.classList.add('d-none')
  error.textContent = '';
  input.classList.remove('invalid');
  input.classList.remove('mb-1');
}

const removeValid = (input) => {
  input.classList.remove('valid');
}


const symbolRemover = () => {
  let keyNum = window.event.keyCode
  if(keyNum == 8) {
    let string = event.target.value;
    let last = string.slice(-1);
    if (last == '/' || last == '-') {
      string = string.slice(0, -1);
      event.target.value = string;
    }
    if (last == ')') {
      let stringArray = Array.from(string)
      let newStringArray = [];
      stringArray.forEach((element, index) => {
        if(index < 10) {
          newStringArray.push(element);
        }
      })
      let newString = String(newStringArray.join(''))
      event.target.value = newString;
    }
    if (last == '}') {
      let stringArray = Array.from(string)
      let newStringArray = [];
      stringArray.forEach((element, index) => {
        if(index < 4) {
          newStringArray.push(element);
        }
      })
      let newString = String(newStringArray.join(''))
      event.target.value = newString;
    };
  };
};

const pushElems = (element) => {
  if(element !== undefined) {
    inputsArray.push(element)
  }
};

const makeUniq = (array) => {
  uniqArray = new Set(array);
  return [...uniqArray];
};
const noDigitsNEng= (event) => {
  if ("1234567890".indexOf(event.key) != -1 || "qwertyuiopasdfghjklzxcvbnm".indexOf(event.key) != -1)
    event.preventDefault();
};

const digits = (event) => {
  if (event.keyCode < 48 || event.keyCode > 57)
  event.returnValue= false;
};

const disableBtn = (button) => {
  button.disabled = true;
  button.classList.add('disabled');
};
 
const ableBtn = (button) => {
  button.disabled = false;
  button.classList.remove('disabled');
};

const birthdateValidation = () => {
    let input = event.target;
    if(isInvalid) {
      input.setAttribute('maxlength', 10);
    } else {
      input.setAttribute('maxlength', 15);
    }
    let todayDate;
    let length = birthdateInputArray.length;
    let inputLength = input.value.length;

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

    if(inputLength < 14) {
      errorText = 'Указана некорректная дата, необходимый формат: "DD/MM/YEAR"';
      addInValid(input, errorText)
    } else {
      addValid(input)
    }


    if(inputLength == 3) {
      let testSting = input.value.slice(0, -1)
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
      let currentYear = new Date().getFullYear()
      let days = input.value.slice(0, -8)
      let month = input.value.slice(3, -5)
      let year = input.value.slice(-4)
      if(year < 1900 || year > currentYear) {
        errorText = 'Указан некорректный год';
        addInValid(input, errorText);
        input.maxlength = 10;
        return
      }
      todayDate = new Date(year, (month-1), days).getFullYear();
      let yearCount = currentYear - todayDate;
      input.value = input.value + ` (${yearCount})`;
      if(!isInvalid) {
        addValid(input);
      } else {
        errorText = 'Указана некорректная дата';
        addInValid(input, errorText)
      }
    };
};

const studyyearValidation = () => {
  let input = event.target
  let currentYear = new Date().getFullYear()
  let endMonth = new Date().getMonth();

  let inputLength = input.value.length;

  
  if(inputLength == 4) {
    let testSting = input.value.slice();
    let endYear = Number(testSting) + 4;
    if(Number(testSting) < 1918 || Number(testSting) > currentYear) {
      errorText = 'Указан некорректный год начала обучения';
      addInValid(input, errorText);
      input.maxlength = 4;
    } else {
      input.maxlength = 18;
      if((currentYear - testSting) > 4 || (endMonth > 9 && endYear < currentYear)) {
        input.value = input.value + '-' + endYear + ' ' + '{закончил}'
      } else {
        if(currentYear - testSting == 1) {
          input.value = input.value + '-' + endYear + ' ' + `{${currentYear - testSting} год}`
        }
        if(currentYear - testSting == 2 || currentYear - testSting == 3 || currentYear - testSting == 4) {
          input.value = input.value + '-' + endYear + ' ' + `{${currentYear - testSting} года}`
        }
        if(currentYear - testSting == 0) {
          if(endMonth == 1) {
            input.value = input.value + '-' + endYear + ' ' + `{${endMonth} месяц}`
          } else if(endMonth == 2 || endMonth == 3 || endMonth == 4) {
            input.value = input.value + '-' + endYear + ' ' + `{${endMonth} месяца}`
          } else {
            input.value = input.value + '-' + endYear + ' ' + `{${endMonth} месяцев}`
          }
        }
      }
      addValid(input)
    }
  };
};

const textValidation = () => {
    let input = event.target;
    if(input.value.length >= 3) {
      addValid(input);
    } else {
      errorText = 'Минимум 3 символа'
      addInValid(input, errorText);
    };
};

const inputValidation = () => {
    let input = event.target;
    switch (input) {
        case nameInput:
          textValidation()
          if(input.value.length >= 3) {
            studentPreObject.name = input.value;
          } else {
            removeValid(input)
            delete studentPreObject.name
          };
        break;
        case surnameInput:
          textValidation()
          if(input.value.length >= 3) {
            studentPreObject.surname = input.value;
          } else {
            removeValid(input)
            delete studentPreObject.surname;
          };
        break;
        case patronymicInput:
          textValidation();
          if(input.value.length >= 3) {
            studentPreObject.patronymic = input.value;
          } else {
            removeValid(input)
            errorText = 'Минимум 3 символа';
            delete studentPreObject.patronymic;
          };
        break;
        case birthdateInput:
            birthdateValidation();
            if(input.value.length < 4) {
              delete studentPreObject.birthdate;
              removeValid(input)
            } else {
              studentPreObject.birthdate = input.value;
            }
        break;
        case studyyearInput:
            studyyearValidation();
            if(input.value.length < 4) {
              delete studentPreObject.studyyear;
              removeValid(input)
            } else {
              studentPreObject.studyyear = input.value;
            }
        break;
          case facultyInput:
            textValidation();
            if(input.value.length >= 3) {
              studentPreObject.faculty = input.value;
            } else {
              removeValid(input)
              errorText = 'Минимум 3 символа';
              delete studentPreObject.faculty;
            };
        break;
    };
      
    if(document.querySelectorAll('.invalid').length >= 1) {
      disableBtn(document.querySelector('.section-form__submit-button'));
    } else if (document.querySelectorAll('.valid').length == 6) {
      ableBtn(document.querySelector('.section-form__submit-button'));
      document.querySelectorAll('.valid').forEach((element) => {
        pushElems(element);
      })
      makeUniq(inputsArray)
    };
};

inputGroup.forEach((input) => {
    input.addEventListener('input', inputValidation);
    input.addEventListener('keyup', inputValidation);
    if(input.id == 'name' || input.id == 'patronymic' || input.id == 'surname') {
      input.addEventListener('keypress', noDigitsNEng);
    };
    if(input.id == 'birthdate' || input.id == 'studyyear') {
      input.addEventListener('keypress', digits);
    }
});


birthdateInput.addEventListener('keydown', symbolRemover);
studyyearInput.addEventListener('keydown', symbolRemover);

// birthdateInput.addEventListener('cut', (event) => {
//   console.log(event.target)
// })

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let newTR = document.createElement("tr")
  newTR.classList.add('section-students__table-body')
  
  for(element in studentPreObject) {
    elementAdding(studentPreObject, element, newTR)
  };
  
  form.classList.add('d-none');
  showButton.classList.remove('d-none');
});
})();