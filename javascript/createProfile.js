const dropzoneElement = document.querySelector(".avatar-upload-dropzone");
const chooseImageButton = document.querySelector(".choose-image-button");
const avatarUpload = document.getElementById("avatarUpload");
const avatarPreview = document.querySelector(".avatar-preview");
const deleteAvatar = document.querySelector(".delete-avatar");
const avatarSelectTrigger = document.querySelector(".avatar-select-trigger");
const avatarSelectList = document.querySelector(".avatar-select-list");
const avatarImagesList = document.querySelectorAll(".avatar-select-item img");
const locationInput = document.getElementById("location");
const nextButton = document.querySelector(".navigate-to-next");

chooseImageButton.addEventListener("click", function () {
  dropzoneElement.click();
});

avatarUpload.addEventListener("change", function () {
  const chosenFile = this.files[0];
  const reader = new FileReader();

  reader.onloadend = function () {
    if (reader.readyState === FileReader.DONE) {
      avatarPreview.style.backgroundImage = `url(${reader.result})`;
      dropzoneElement.classList.add("has-image");
    }
  };
  reader.readAsDataURL(chosenFile);
});

avatarSelectTrigger.addEventListener("click", function () {
  avatarSelectList.classList.toggle("show");
  avatarSelectTrigger.classList.toggle("rotate");
});

avatarImagesList.forEach((image) => {
  image.addEventListener("click", function () {
    avatarPreview.style.backgroundImage = `url(${this.src})`;
    dropzoneElement.classList.add("has-image");

    avatarImagesList.forEach((image) => (image.style.outline = ""));
    this.style.outline = "2px solid #df4290";
  });
});

deleteAvatar.addEventListener("click", (e) => {
  e.preventDefault();

  const avatarPreview = document.querySelector(".avatar-preview");
  avatarPreview.style.backgroundImage = "none";
  dropzoneElement.classList.remove("has-image");
  avatarImagesList.forEach((image) => (image.style.outline = ""));
});

window.addEventListener("load", function () {
  if (locationInput.value) {
    nextButton.disabled = false;
  } else {
    nextButton.disabled = true;
  }

  locationInput.addEventListener("input", function () {
    nextButton.disabled = !this.value;
  });
});

nextButton.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "signupReasons.html";
});
