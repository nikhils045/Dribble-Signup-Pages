const dropzoneElement = document.querySelector(".avatar-upload-dropzone");
const avatarUpload = document.getElementById("avatarUpload");
const avatarPreview = document.querySelector(".avatar-preview");
const deleteAvatar = document.querySelector(".delete-avatar");
const uploadButton = document.querySelector(".upload-button");

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

deleteAvatar.addEventListener("click", (e) => {
  e.preventDefault();

  const avatarPreview = document.querySelector(".avatar-preview");
  avatarPreview.style.backgroundImage = "none";
  dropzoneElement.classList.remove("has-image");
});

uploadButton.addEventListener("click", function () {
  dropzoneElement.click();
});
