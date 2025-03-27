import { NAMES, DESCRIPTIONS, COMMENTS, POSTS } from "./data.js";
print(POSTS);
function getRandomArrayElement(array) {
  return array[getRandomPositiveInteger(0, array.length - 1)];
}

function createComment(index) {
  return {
    id: index,
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    name: getRandomArrayElement(NAMES),
    message: Array.from({ length: getRandomPositiveInteger(1, 2) }, () =>
      getRandomArrayElement(COMMENTS)
    ).join(" "),
  };
}

function createPicture(index) {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({ length: getRandomPositiveInteger(0, 6) }, (_, i) =>
      createComment(i + 1)
    ),
  };
}

function lengthCalc(text, maxLength) {
  if (text.length <= maxLength) {
    return true;
  }
  return false;
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

export {
  createPicture,
  getRandomPositiveInteger,
  getRandomArrayElement,
  print,
  findEl,
};
