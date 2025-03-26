import { NAMES, COMMENTS, POSTS } from './data.js';

print(POSTS)

function getRandomArrayElement(array) {
    return array[getRandomPositiveInteger(0, array.length - 1)]
}

function createPost(index) {
    return {
        id: index,
        url: `photos/${index}.jpg`,
        description: 'Картинка',
        likes: getRandomPositiveInteger(15, 200),
        message: getRandomArrayElement(COMMENTS),
        name: getRandomArrayElement(NAMES),
        avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
        comments: Array.from(
            { length: getRandomPositiveInteger(0, COMMENTS.length - 1) },
            ((_, i) => getRandomArrayElement(COMMENTS))
        )
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

function createComment() {
    return {
        "name": getRandomArrayElement(NAMES),
        "avatar": `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
        "comment": getRandomArrayElement(COMMENTS)
    }
}

export { createPost, createComment, getRandomPositiveInteger, getRandomArrayElement, print, findEl }