function getRandomNumber(min, max) { // htmlacademy
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function lengthCalc(text, maxLength) {
    if (text.length <= maxLength) {
        return true
    }
    return false
}

function getRandomPositiveInteger(a, b) {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
}

function checkStringLength(string, length) {
    return string.length <= length;
}

const NAMES = [
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

const COMMENTS = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

function getRandomArrayElement(array) {
    return array[getRandomPositiveInteger(0, array.length - 1)]
}


const createPost = (index) => {
    return {
        id: index,
        name: getRandomArrayElement(NAMES),
        url: `photos/${index}.jpg`,
        description: 'Картинка',
        likes: getRandomPositiveInteger(15, 200),
        avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
        message: getRandomArrayElement(COMMENTS)
    }
}

const POSTS = Array.from({ length: 25 }, (_, i) => createPost(i + 1));