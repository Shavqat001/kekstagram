import { findEl, print } from "./util.js";
import { POSTS } from "./data.js";
print(POSTS)

let pictures = findEl('.pictures').querySelectorAll('.picture');
let bigPicture = findEl('.big-picture');

for (let i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener('click', (e) => {
        e.preventDefault();

        bigPicture.classList.remove('hidden');
        findEl('.social__comment-count').classList.add('hidden');
        findEl('.comments-loader').classList.add('hidden');
        document.body.classList.add('modal-open');

        findEl('.big-picture__img img', bigPicture).src = findEl('.picture__img', pictures[i]).src;
        findEl('.likes-count', bigPicture).textContent = findEl('.picture__likes', pictures[i]).textContent;
        findEl('.comments-count', bigPicture).textContent = findEl('.picture__comments', pictures[i]).textContent;

        findEl('.social__comments').innerHTML = '';
        findEl('.social__comments').innerHTML += `
                <li class="social__comment">
                    <img
                        class="social__picture"
                        src="${POSTS[i].avatar}"
                        alt="${POSTS[i].name}"
                        width="35" height="35">
                    <p class="social__text">${POSTS[i].message}</p>
                </li>
            `;
    });
}
    
document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape') {
        bigPicture.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }
})

findEl('.big-picture__cancel').addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
})