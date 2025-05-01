import { createPicture } from "./util.js";

const NAMES = [
  "Алексей",
  "Андрей",
  "Антон",
  "Вадим",
  "Валерий",
  "Василий",
  "Евгений",
  "Иван",
  "Михаил",
  "Николай",
  "Олег",
  "Пётр",
  "Руслан",
  "Сергей",
  "Тимур",
  "Фёдор",
];

const DESCRIPTIONS = [
  "Летний чил на югах. #тай #отдых #лето #чил #travel #travelgram #summergram #chill",
  "Тестим новую камеру! #camera #test #new #newcameratest #pic #photo #instaphoto",
  "Затусили с друзьями на море #laptevsea #north #northeastpassage",
  "Как же круто тут кормят #food #foodgram #instafood #delicious #yummy",
  "Отдыхаем... #chill #relax #group #photo",
  "Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......",
  "Вот это тачка! #wow #car #carwow #drive",
  "#fun #party #cool #young",
  "Господи, это такая милота, я сейчас умру от нежности, у меня закшалил мимимиметр",
  "Хорошо, когда в жизни есть #друзья, которые вместе со мной могут зайти в #барнарубинштейна и бахнуть #пивка",
  "Норм",
];

const COMMENTS = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];

const EFFECTS = [
  {
    value: "none",
    filter: () => "none",
    step: 1,
    start: 3,
    range: {
      min: 0,
      max: 100,
    },
  },
  {
    value: "chrome",
    filter: (value) => `grayscale(${value})`,
    step: 0.1,
    start: 0.7,
    range: {
      min: 0,
      max: 1,
    },
  },
  {
    value: "sepia",
    filter: (value) => `sepia(${value})`,
    step: 0.1,
    start: 0.3,
    range: {
      min: 0,
      max: 1,
    },
  },
  {
    value: "marvin",
    filter: (value) => `invert(${value}%)`,
    step: 1,
    start: 100,
    range: {
      min: 0,
      max: 100,
    },
  },
  {
    value: "phobos",
    filter: (value) => `blur(${value}px)`,
    step: 0.1,
    start: 0.8,
    range: {
      min: 0,
      max: 3,
    },
  },
  {
    value: "heat",
    filter: (value) => `brightness(${value})`,
    step: 0.1,
    start: 2.1,
    range: {
      min: 1,
      max: 3,
    },
  },
];

const POSTS = Array.from({ length: 25 }, (_, i) => createPicture(i + 1));

export { NAMES, DESCRIPTIONS, COMMENTS, EFFECTS, POSTS };
