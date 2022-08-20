// Задание 1
const forename = prompt('Введите имя')
const surname = prompt('Введите фамилию')
const nickname = prompt('Введите никнейм')
if (forename && surname && nickname) {
    alert(`${forename} ${surname}`)
} else if (forename && surname) {
    alert(`${forename} ${surname}`)
} else if (surname && nickname) {
    alert(`${nickname}`)
} else if (forename && nickname) {
    alert(`${forename}`)
} else {
    alert(`Здравствуйте, Noname`);
}
// Задание 2
const numer = prompt('Введите число')
let more, value, drob, pn
if (numer > 100) {
    more = alert('больше 100')
} else {
    more = alert('меньше 100')
}
if (numer % 2 === 0) {
    value = alert('чётное')
} else {
    value = alert('нечётное')
}
if (numer % 1 === 0) {
    drob = alert('не дробное')
} else {
    drob = alert('дробное')
}
if (numer > 0) {
    pn = alert('положительное')
} else {
    pn = alert('отрицательное')
}
alert(`Введённое вами число ${more}, ${value}, ${drob}, ${pn}`)

// Задание 3
const forename2 = prompt('Введите имя')
const surname2 = prompt('Введите фамилию')
const nickname2 = prompt('Введите никнейм')

(forename2 && surname2 && nickname2) ? alert(`${forename2} ${surname2}`) :
(forename2 && surname2) ? alert(`${forename2} ${surname2}`) :
(surname2 && nickname2) ?  alert(`${nickname2}`) :
(forename2 && nickname2) ? alert(`${forename2}`) :  alert(`Здравствуйте, Noname`);
// 
const numer2 = prompt('Введите число')
let more2, value2, drob2, pn2
(numer2 > 100) ? more2 = alert('больше 100') : more2 = alert('меньше 100');
(numer2 % 2 === 0) ? value2 = alert('чётное') : value2 = alert('нечётное');
(numer2 % 1 === 0) ? drob2 = alert('не дробное') : drob2 = alert('дробное');
(numer2 > 0) ? pn2 = alert('положительное') : pn2 = alert('отрицательное');

alert(`Введённое вами число ${more2}, ${value2}, ${drob2}, ${pn2}`)
