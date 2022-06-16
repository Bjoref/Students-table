# Students-table

**Описание:**
Одностраничный сайт с возможностью добавить студента через форму;

**Как работает сайт:**

**Форма должна проходить валидацию по следующим правилам:**
- Все поля формы обязательны для заполнения;
- Дата рождения находится в диапазоне от 01.01.1900 до текущей даты;
- Год начала обучения находится в диапазоне от 2000-го до текущего года;

Валидация должна происходить после нажатия на кнопку "добавить студента", расположенную под полями для ввода. Если валидация прошла успешно, то все поля очищаются, а новый студент добавляется в таблицу. В противном случае над кнопкой нужно вывести сообщения с описанием ошибок для пользователя.

Данные из массива должны выводиться в табличном виде. Каждая строка таблицы содержит информацию об одном студенте. 

**Колонки таблицы:**
- ФИО студента;
- Факультет;
- Дата рождения и возраст в формате "31.12.2000 (20 лет)". Возраст должен быть вычислен из даты рождения;
- Годы обучения и номер курса в формате "2019-2023 (2 курс)". Считается, что все студенты учатся 4 года, то есть диапазон с годами обучения выводится как {год начала обучения}-{+4 года}. Если сентябрь года окончания обучения уже прошёл, в скобках вместо указания курса нужно должно выводиться "закончил".
Первая строка таблицы - заголовочная, в ней указываются заголовки колонок (ФИО, Факультет, ДР и возраст, Годы обучения). 

**При нажатии на ячейку заголовочной строки должна происходить сортировка по соответствующим полям студентов:**
- ФИО сортирует по соединённой строке из фамилии, имени и отчества по алфавиту по возрастанию;
- Факультет - по факультету по алфавиту по возрастанию;
- ДР и возраст - по дате рождения по возрастанию;
- Годы обучения - по году начала обучения.

**Перед таблицей также нужно вывести фильтры, состоящие из полей:**
- ФИО для поиска подстроки в фамилии, имени или отчестве;
- Факультет для поиска подстроки в названии факультета;
- Год начала обучения (точное совпадение);
- Год окончания обучения (точное совпадение);
- При любых изменениях в полях для фильтрации содержимое таблицы должно измениться в соответствии с указанными фильтрами. Если указано несколько фильтров, то все они применяются к массиву студентов по очереди.

-----------------------------------------------------------------------------------------
**Description**
One-page site with the ability to add a student through the form;

**How the site works:**

**The form must be validated according to the following rules:**
- All form fields are required;
- Date of birth is in the range from 01/01/1900 to the current date;
- The year of commencement of studies is in the range from 2000 to the current year;

Validation should occur after clicking on the "add student" button located below the input fields. If the validation is successful, then all fields are cleared and a new student is added to the table. Otherwise, above the button, you need to display messages describing errors for the user.

Data from the array should be displayed in tabular form. Each row of the table contains information about one student.

**Table columns:**
- Full name of the student;
- Faculty;
- Date of birth and age in the format "12/31/2000 (20 years)". Age must be calculated from birth statistics;
- Years of study and course number in the format "2019-2023 (2nd year)". It is assumed that all students study for 4 years, that is, the range with years of study is displayed as {year of study start} -{+4 years}. If September ended already passed, instead of indicating the course, it was necessary to print "finished" in brackets.
The first table of the table is a header table, it always contains column headings (full name, faculty, DR and age, years of study).

**Clicking on a cell in the header row should sort by the corresponding student fields:**
- Full name sorts by the connected line from the last name, first name and patronymic in alphabetical order in ascending order;
- Faculty - by faculty in alphabetical order in ascending order;
- DR and age - by date of birth in ascending order;
- Years of study - according to the year of beginning of study.

**Before the table, you also need to display filters consisting of fields:**
- Full name to search for a substring in the last name, first name or patronymic;
- Faculty to search for a substring in the name of the faculty;
- Year of commencement of training (exact match);
- Year of graduation (exact match);
- With any changes in the fields for filtering, the contents of the table should change in accordance with the specified filters. If multiple filters are specified, they are all applied to the student array in turn.
