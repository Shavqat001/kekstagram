import { findEl, print } from "./util.js";
import { POSTS } from "./data.js";

let pictureTemplate = document.querySelector('#picture').content;

POSTS.forEach((post) => {
    let picture = findEl('.picture', pictureTemplate).cloneNode(true);
    findEl('.picture__img', picture).src = post.url;
    findEl('.picture__img', picture).alt = post.description;
    findEl('.picture__likes', picture).textContent = post.likes;
    findEl('.picture__comments', picture).textContent = post.comments.length;
    findEl('.pictures').append(picture);
});