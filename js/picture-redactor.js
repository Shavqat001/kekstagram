import { findEl } from "./util";

const decreaseBtn = findEl(".scale__control--smaller");
const increaseBtn = findEl(".scale__control--bigger");
const { value } = findEl(".scale__control--value");
const step = 25;

decreaseBtn.onclick = () => {
  value = `${value + step}%`;
};

increaseBtn.onclick = () => {
    value = `${value - step}%`;
};
