const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const nameLabel = document.querySelector("label[for='name']");
const usernameLabel = document.querySelector("label[for='username']");
const passwordLabel = document.querySelector("label[for='password']");
const emailLabel = document.querySelector("label[for='email']");
const checkboxInput = document.getElementById("user-terms");
const errorExplanation = document.querySelector(".errorExplanation ul");
const submitButton = document.querySelector("input[type=submit]");

// Regular expressions for username and email validation
const usernameRegex = /^[a-zA-Z0-9_]{6,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to add error messages to input elements and labels
function addError(input, label, message) {
  input.style.backgroundColor = "#ffeeee";
  input.style.color = "#ff5555";

  const errorIcon = document.createElement("i");
  errorIcon.classList.add("fa-solid", "fa-triangle-exclamation");
  label.insertBefore(errorIcon, label.firstChild);

  const errorItem = document.createElement("li");
  errorItem.textContent = message;
  errorExplanation.appendChild(errorItem);
}

// Function to remove error messages from input elements and labels
function removeError() {
  const errorIcons = document.querySelectorAll(
    "label i.fa-solid.fa-triangle-exclamation"
  );
  errorIcons.forEach((errorIcon) => errorIcon.remove());
  errorExplanation.innerHTML = "";

  const inputs = document.querySelectorAll("input[type=text], input[type=password]");
  inputs.forEach((input) => {
    input.style.backgroundColor = "";
    input.style.color = "";
  });
}

// Add event listener to the form to handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  removeError(); // Remove any existing errors

  const name = nameInput.value.trim();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const email = emailInput.value.trim();
  const isChecked = checkboxInput.checked;

  let hasErrors = false; // Flag to track if there are errors

  // Name validation
  if (name === "") {
    addError(nameInput, nameLabel, "Name can't be blank");
    hasErrors = true;
  }

  // Username validation
  if (username === "") {
    addError(usernameInput, usernameLabel, "Username can't be blank");
    hasErrors = true;
  } else if (!usernameRegex.test(username)) {
    addError(
      usernameInput,
      usernameLabel,
      "Username must be 6-20 characters long and contain only letters, numbers, and underscores."
    );
    hasErrors = true;
  }

  // Password validation
  if (password === "") {
    addError(passwordInput, passwordLabel, "Password can't be blank");
    hasErrors = true;
  } else if (password.length < 6) {
    addError(
      passwordInput,
      passwordLabel,
      "Password is too short (minimum is 6 characters)"
    );
    hasErrors = true;
  }

  // Email validation
  if (email === "") {
    addError(emailInput, emailLabel, "Email can't be blank");
    hasErrors = true;
  } else if (!emailRegex.test(email)) {
    addError(emailInput, emailLabel, "Email is invalid");
    hasErrors = true;
  }

  // Checkbox validation
  if (!isChecked) {
    addError(checkboxInput, checkboxInput, "You must agree to the Terms of Service");
    hasErrors = true;
  }

  // Form will submitted  if there are no errors
  if (!hasErrors) {
    form.submit();
  }
});
