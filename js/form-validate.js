import { HASHTAGRULES } from "./data.js";
import { findEl, isEsc, print } from "./util.js";

const formUpload = findEl(".img-upload__form");
const modal = findEl(".img-upload__overlay");
const uploadFile = findEl("#upload-file");
const hashTags = findEl(".text__hashtags");

uploadFile.addEventListener("change", openModal);

findEl(".img-upload__cancel").addEventListener("click", closeModal);

function handleUploadFile() {
  document.body.addEventListener("keydown", (e) => {
    isEsc(e) ? closeModal() : "";
  });
}

const pristine = new Pristine(formUpload, {
  classTo: "text__wrapper",
  errorTextParent: "text__wrapper",
  errorTextClass: "text__wrapper--error",
});

function checkHashTags(value) {
  if (
    value.startsWith("#") &&
    /^#[a-zA-Zа-яА-Я0-9]+$/.test(value) &&
    value.split("#").every((el) => el.length <= 20) &&
    value.split("#").length
  ) {
    return true;
  }
  return false;
}

pristine.addValidator(hashTags, checkHashTags, `неправильно заполнены хештеги`);

formUpload.addEventListener("submit", (e) => {
  const isValid = pristine.validate();
  if (isValid) {
    console.log("Всё норм");
  } else {
    e.preventDefault();
    alert("Форма не валидна");
  }
});

function closeModal() {
  document.body.classList.remove("modal-open");
  modal.classList.add("hidden");
  document.body.removeEventListener("keydown", handleUploadFile);
  formUpload.reset();
}

function openModal() {
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  document.body.addEventListener("keydown", handleUploadFile);
}
