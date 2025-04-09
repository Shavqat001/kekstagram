import { POSTS } from "./data.js";
import { findEl, isEsc } from "./util.js";

const pictures = findEl(".pictures").querySelectorAll(".picture");
const body = document.body;
const socialCommentCount = findEl(".social__comment-count");
const commentsLoader = findEl(".comments-loader");
const bigPicture = findEl(".big-picture");
const bigPictureImg = findEl(".big-picture__img img", bigPicture);
const likesCount = findEl(".likes-count", bigPicture);
const commentsCount = findEl(".comments-count", bigPicture);
const socialComments = findEl(".social__comments");
const socialCount = findEl(".social__caption");

pictures.forEach((picture, i) => {
  picture.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();

    bigPictureImg.src = findEl(".picture__img", picture).src;
    likesCount.textContent = findEl(".picture__likes", picture).textContent;
    socialCount.textContent = POSTS[i].description;
    commentsCount.textContent = findEl(
      ".picture__comments",
      picture
    ).textContent;

    createComments(POSTS[i].comments);
    
    socialCommentCount.classList.remove("hidden");
    commentsLoader.classList.remove("hidden");
  });
});

function createComments(comments) {
  socialComments.innerHTML = "";

  comments.forEach(({ avatar, name, message }) => {
    const li = document.createElement("li");
    li.classList.add("social__comment");
    const img = document.createElement("img");
    img.classList.add("social__picture");
    img.src = avatar;
    img.alt = name;
    img.width = "35";
    img.height = "35";

    const p = document.createElement("p");
    p.classList.add("social__text");
    p.textContent = message;
    li.append(img, p);
    socialComments.append(li);
  });
}

function closeModal() {
  bigPicture.classList.add("hidden");
  body.classList.remove("modal-open");
}

function openModal() {
  bigPicture.classList.remove("hidden");
  socialCommentCount.classList.add("hidden");
  commentsLoader.classList.add("hidden");
  body.classList.add("modal-open");
}

document.addEventListener("keydown", (e) => {
  if (isEsc(e)) {
    closeModal();
  }
});

findEl(".big-picture__cancel").addEventListener("click", closeModal);
