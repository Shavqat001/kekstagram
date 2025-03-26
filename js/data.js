import { createPost } from './util.js';

const NAMES = [
    'Алексей', "Андрей", "Антон", 
    'Вадим', 'Валерий', 'Василий', 'Евгений', 
    'Иван', 'Михаил', 'Николай', 'Олег', 'Пётр', 
    'Руслан', 'Сергей', 'Тимур', 'Фёдор'
];

const COMMENTS = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const POSTS = Array.from({ length: 25 }, (_, i) => createPost(i + 1));

export { NAMES, COMMENTS, POSTS }