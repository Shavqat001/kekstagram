import { POSTS } from "./data.js";
import { findEl, isEsc, print } from "./util.js";

const body = document.body;
const pictures = findEl(".pictures").querySelectorAll(".picture");
const socialCommentCount = findEl(".social__comment-count");
const commentsLoader = findEl(".comments-loader");
const bigPicture = findEl(".big-picture");
const bigPictureImg = findEl(".big-picture__img img", bigPicture);
const likesCount = findEl(".likes-count", bigPicture);
const commentsCount = findEl(".comments-count", bigPicture);
const socialComments = findEl(".social__comments");
const socialCount = findEl(".social__caption");
let maxComments = 5;
let currentPost = null;

pictures.forEach((picture, i) => {
  picture.addEventListener("click", (e) => {
    e.preventDefault();
    currentPost = POSTS[i];
    maxComments = 5;
    openModal();
    bigPictureImg.src = findEl(".picture__img", picture).src;
    likesCount.textContent = findEl(".picture__likes", picture).textContent;
    socialCount.textContent = currentPost.description;
    commentsCount.textContent = currentPost.comments.length;

    createComments(currentPost.comments);
    updateComments(maxComments, currentPost.comments.length);
    commentsLoader.classList.remove("hidden");
  });
});

commentsLoader.addEventListener("click", () => {
  maxComments += 5;

  console.log(maxComments, currentPost.comments.length);

  if (maxComments >= currentPost.comments.length) {
    commentsLoader.classList.add("hidden");
  }
  createComments(currentPost.comments);
  updateComments(maxComments, currentPost.comments.length);
});

function updateComments(maxComments, count) {
  socialCommentCount.innerHTML = `
  ${
    maxComments < Number(count) ? maxComments : Number(count)
  } из <span class="comments-count">${Number(count)}</span> комментариев`;
}

function createComments(comments) {
  socialComments.innerHTML = "";

  comments.forEach(({ avatar, name, message }, i) => {
    if (i >= maxComments) {
      return;
    }

    const li = document.createElement("li");
    li.classList.add("social__comment");
    const img = document.createElement("img");
    img.classList.add("social__picture");
    img.src = avatar;
    img.alt = name;
    img.width = 35;
    img.height = 35;

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
  body.classList.add("modal-open");
}

document.addEventListener("keydown", (e) => {
  if (isEsc(e)) {
    closeModal();
  }
});

findEl(".big-picture__cancel").addEventListener("click", closeModal);
