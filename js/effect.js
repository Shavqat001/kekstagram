import { findEl } from "./util.js";

const effectLevel = findEl(".effect-level__slider");
const picture = findEl(".img-upload__preview");

noUiSlider.create(effectLevel, {
  range: {
    min: 0,
    max: 100,
  },
  start: 30,
  step: 1,
  connect: "lower",
});

effectLevel.noUiSlider.on("update", (...arr) => {
  console.log(arr);
});
