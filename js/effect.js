import { findEl } from "./util.js";

const sliderElement = findEl(".effect-level__slider");
const effectLevel = findEl(".effect-level__value");
const picture = findEl(".img-upload__preview img");
const pictureEffects = document.querySelectorAll(".effects__radio");

const effects = [
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

  console.log(selected);

  let value = parseFloat(values[0]);
  picture.style.filter = selected.filter(value);
  effectLevel.value = selected.filter(value);
});
