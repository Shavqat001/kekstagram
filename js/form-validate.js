import { findEl, isEsc, stopEscEvent, checkHashTags } from "./util.js";

const body = document.body;
const formUpload = findEl(".img-upload__form");
const modal = findEl(".img-upload__overlay");
const uploadFile = findEl("#upload-file");
const hashTagField = findEl(".text__hashtags");
const comments = findEl(".text__description");
const closeModalBtn = findEl(".img-upload__cancel");
const pristine = new Pristine(formUpload, {
  classTo: "text__wrapper",
  errorTextParent: "text__wrapper",
  errorTextClass: "text__wrapper--error",
});

hashTagField.addEventListener("keydown", (e) => stopEscEvent(e));
comments.addEventListener("keydown", (e) => stopEscEvent(e));
uploadFile.addEventListener("change", openModal);
closeModalBtn.addEventListener("click", closeModal);

const handleUploadFile = body.addEventListener("keydown", (e) => {
  if (isEsc(e)) closeModal();
});

pristine.addValidator(
  hashTagField,
  checkHashTags,
  `неправильно заполнены хештеги`
);

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
  body.classList.remove("modal-open");
  modal.classList.add("hidden");
  document.body.removeEventListener("keydown", handleUploadFile);
  formUpload.reset();
  pristine.reset();
}

function openModal() {
  body.classList.add("modal-open");
  modal.classList.remove("hidden");
  body.addEventListener("keydown", handleUploadFile);
}
