import { findEl } from "./util.js";

const decreaseBtn = findEl(".scale__control--smaller");
const increaseBtn = findEl(".scale__control--bigger");
const imgScale = findEl(".scale__control--value");
const picture = findEl(".img-upload__preview img");
const effectList = findEl(".effects__list");

let defaultCount = 100;
imgScale.value = `${defaultCount}%`;
let step = 25;

decreaseBtn.onclick = () => {
  changeScale(-step);
};

increaseBtn.onclick = () => {
  changeScale(step);
};

function changeScale(sign) {
  const newScale = defaultCount + sign;
  if (newScale < 25 || newScale > 100) return;
  defaultCount = newScale;
  imgScale.value = `${defaultCount}%`;
  picture.style.transform = `scale(${newScale / 100})`;
}

effectList.onclick = function (e) {
  const target = e.target;
  picture.className = "";
  if (target.classList.contains("effects__radio")) {
    picture.classList.add(`effects__preview--${target.value}`);
  }
};
