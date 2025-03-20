import { NAMES, COMMENTS } from './data.js';

function getRandomArrayElement(array) {
    return array[getRandomPositiveInteger(0, array.length - 1)]
}

function createPost(index) {
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

function print(log) {
    console.log(log);
}

function findEl(el, parent) {
    if (parent) {
        return parent.querySelector(el);
    }

    return document.querySelector(el);
}

export { createPost, getRandomPositiveInteger, print, findEl }