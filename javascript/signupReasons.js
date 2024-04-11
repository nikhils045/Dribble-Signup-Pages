const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const option = document.querySelectorAll(".option");
const optionPara = document.querySelectorAll(".option-para");
const finishButton = document.querySelector(".navigate-to-finish");
const multiSelectInfo = document.querySelector(".multi-select-info");

// Function to check if any checkbox is selected
function isAnyCheckboxChecked() {
  return [...checkboxes].some((checkbox) => checkbox.checked);
}

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", () => {
    option[index].classList.toggle("checked");
    optionPara[index].classList.toggle("show");
    finishButton.disabled = !isAnyCheckboxChecked();

    updateMultiSelectInfo();
  });
});

function updateMultiSelectInfo() {
  multiSelectInfo.style.display = finishButton.disabled ? "none" : "block";
}

updateMultiSelectInfo();
finishButton.disabled = !isAnyCheckboxChecked();

finishButton.addEventListener("click", function () {
  window.location.href = "emailVerification.html";
});
