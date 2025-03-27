import { POSTS } from "./data.js";
import { findEl, createComment, createPost } from "./util.js";

const pictures = findEl('.pictures').querySelectorAll('.picture');
const body = document.body;
const socialCommentCount = findEl('.social__comment-count');
const commentsLoader = findEl('.comments-loader');
const bigPicture = findEl('.big-picture');
const bigPictureImg = findEl('.big-picture__img img', bigPicture);
const likesCount = findEl('.likes-count', bigPicture);
const commentsCount = findEl('.comments-count', bigPicture);
const socialComments = findEl('.social__comments');

pictures.forEach((picture, i) => {
    picture.addEventListener('click', (e) => {
        e.preventDefault();

        bigPicture.classList.remove('hidden');
        socialCommentCount.classList.add('hidden');
        commentsLoader.classList.add('hidden');
        body.classList.add('modal-open');

        bigPictureImg.src = findEl('.picture__img', picture).src;
        likesCount.textContent = findEl('.picture__likes', picture).textContent;
        commentsCount.textContent = findEl('.picture__comments', picture).textContent;
        socialComments.innerHTML = '';

        const { name, avatar, comments } = POSTS[i];

        comments.forEach((_) => {
            socialComments.innerHTML += `
                <li class="social__comment">
                    <img
                        class="social__picture"
                        src="${avatar}"
                        alt="${name}"
                    width="35" height="35">

                    <p class="social__text">${_}</p>
                </li>`;
        });
    });
});

function closeModal() {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
}

document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape') {
        closeModal();
    }
})

findEl('.big-picture__cancel').addEventListener('click', closeModal);