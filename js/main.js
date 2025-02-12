function getRandomNumber(min, max) { // htmlacademy
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function lengthCalc(text, maxLength) {
    if (text.length <= maxLength) {
        return true
    }
    return false
}

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger(a, b) {
    // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
    // реализуем поддержку передачи минимального и максимального значения в любом порядке,
    // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max.

    // После нам нужно убедиться, что пользователь не передал дробные значения,
    // для этого на всякий пожарный случай нижнюю границу диапазона
    // мы округляем к ближайшему большему целому с помощью Math.ceil,
    // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
    // мы не ругаем пользователя за переданное отрицательное число,
    // а просто берём его по модулю с помощью Math.abs

    // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
    // которое домножаем на разницу между переданными числами плюс единица - это будет наша случайная дельта.
    // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
    const result = Math.random() * (upper - lower + 1) + lower;
    // "Плюс единица", чтобы включить верхнюю границу диапазона в случайные числа

    // И в конце с помощью метода Math.floor мы округляем полученный результат,
    // потому что Math.random() генерирует только дробные числа и ноль.
    return Math.floor(result);
}

function checkStringLength(string, length) {
    return string.length <= length;
}

let names = [
    'Алексей',
    "Андрей",
    "Антон",
    'Богдан',
    'Вадим',
    'Валентин',
    'Валерий',
    'Василий',
    'Виталий',
    'Владислав',
    'Даниил',
    'Евгений',
    'Иван',
    'Константин',
    'Михаил',
    'Николай',
    'Олег',
    'Павел',
    'Пётр',
    'Руслан',
    'Сергей',
    'Степан',
    'Тимур',
    'Фёдор',
    'Филипп'
];

let commentLines = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

function getPicture() {
    let comments = [];
    for (let i = 1; i <= 25; i++) {
        comments = [
            ...comments,
            {
                id: i,
                name: names[getRandomNumber(0, names.length - 1)],
                url: `photos/${i}.jpg`,
                description: 'Картинка',
                likes: getRandomPositiveInteger(15, 200),
                avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
                message: commentLines[getRandomPositiveInteger(0, commentLines.length - 1)]
            }
        ];
    }
    return comments;
}

function getRandomArrayElement(array) {
    return array[Math.floor(Math.random() * array.length)]
}