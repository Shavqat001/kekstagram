import { EFFECTS as effects } from "./data.js";
import { findEl } from "./util.js";

const sliderElement = findEl(".effect-level__slider");
const effectLevel = findEl(".effect-level__value");
const picture = findEl(".img-upload__preview img");
const pictureEffects = document.querySelectorAll(".effects__radio");

noUiSlider.create(sliderElement, {
  start: effects[0].start,
  step: effects[0].step,
  range: effects[0].range,
  connect: "lower",
});

const slider = sliderElement.noUiSlider;

pictureEffects.forEach((pctEffect) => {
  pctEffect.onchange = () => {
    picture.className = "";
    picture.style.filter = 'none';
    effectLevel.value = "";
    picture.classList.add(`effects__preview--${pctEffect.value}`);

    let value = pctEffect.value;
    let selected = effects.find((effect) => effect.value === value);
    if (selected) {
      slider.updateOptions({
        range: selected.range,
        start: selected.start,
        step: selected.step,
      });
    }
  };
});

slider.on("update", (values) => {
  let selected = effects.find(
    (effect) => document.querySelector(`[value="${effect.value}"]`).checked
  );

  let value = parseFloat(values[0]);
  picture.style.filter = selected.filter(value);
  effectLevel.value = selected.filter(value);
});
