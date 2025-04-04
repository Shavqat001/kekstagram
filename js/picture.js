import { findEl } from "./util.js";
import { POSTS } from "./data.js";

let pictureTemplate = document.querySelector("#picture").content;

POSTS.forEach(({ url, description, likes, comments }) => {
  let picture = findEl(".picture", pictureTemplate).cloneNode(true);
  findEl(".picture__img", picture).src = url;
  findEl(".picture__img", picture).alt = description;
  findEl(".picture__likes", picture).textContent = likes;
  findEl(".picture__comments", picture).textContent = comments.length;
  findEl(".pictures").append(picture);
});
