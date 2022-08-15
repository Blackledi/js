//Задание 1
const enterWords = prompt('Введите текст');
alert(`${'Введённый текст :'} ${enterWords}`);

//Задание 2
const number1 = parseInt(prompt('Введите первое число', ''));
const number2 = parseInt(prompt('Введите второе число', ''));
const c = number1 + number2;
alert(`${'Результат сложение :'} ${c}`);

//Задание 3
const Name = prompt('Введите Ваше имя');
const are = parseInt(prompt('Введите ваш возраст', ''));
if (are >= 18) {
    alert(`${'Добро пожаловать'} ${Name}`);
} else {
    alert(`${'Простите,'} ${Name} ${', доступ закрыт'}`);
}

//Задание 4
let Blok = confirm('Хотите ввести название блока?');
if (Blok === false) {
    confirm('Элементу не присвоен класс')
} else {
    Blok = prompt('Введите название блока');
}
let element = confirm('Хотите ввести название элементa?');
if (element === false) {
    confirm('Закончить выполнение скрипта');
} else {
    element = prompt('Введите название элемента','__');

let modif = confirm('Хотите ввести название модификатора?')
if (modif === false) {
    alert(`${Blok} ${element}`);
} else {
    modif = prompt('Введите название модификатора','_');
    alert(`${Blok} ${element} ${modif}`);
}}

//Задание 5
const num1 = parseInt(prompt('Введите первое число', ''));
const num2 = parseInt(prompt('Введите второе число', ''));
const operation = prompt('Выберите нужную арифметическую операцию (+,-,*,/)')
if (operation === '+'){
    const rez = num1 + num2;
    alert(`${'Результат сложение :'} ${rez}`);
}else if(operation === '-'){
    const rez = num1 - num2;
    alert(`${'Результат вычитания :'} ${rez}`);
}else if(operation === '*'){
    const rez = num1 * num2;
    alert(`${'Результат умножения :'} ${rez}`);
}else if(operation === '/'){
    const rez = num1 / num2;
    alert(`${'Результат деления :'} ${rez}`);
}
