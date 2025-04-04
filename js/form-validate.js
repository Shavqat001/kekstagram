import { findEl, isEsc } from "./util.js";
const modal = findEl(".img-upload__overlay");
const uploadFile = findEl("#upload-file");

uploadFile.addEventListener("change", (e) => {
  openModal();

  findEl(".img-upload__cancel").addEventListener("click", () => {
    closeModal();
  });

  document.body.addEventListener("keydown", (e) => {
    isEsc(e) ? closeModal() : '';
  });
});



function closeModal() {
  document.body.classList.remove("modal-open");
  modal.classList.add("hidden");
}

function openModal() {
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}
