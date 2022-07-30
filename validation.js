const form = document.getElementById("myForm");
const firstName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const aboutMe = document.getElementById("aboutme");
const robotCheck = document.getElementById("robot");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const createError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const createSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  //grabbing the values of the input fields
  const nameValue = firstName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  // const aboutMeValue = aboutMe.value.trim();
  // const robotCheckValue = robotCheck.value.trim();

  if (nameValue === "") {
    createError(firstName, "name is required");
  } else {
    createSuccess(firstName);
  }

  if (emailValue === "") {
    createError(email, "email is required");
  } else if (!isValidEmail(emailValue)) {
    createError(email, "provide a valid email address");
  } else {
    createSuccess(email);
  }

  if (passwordValue === "") {
    createError(password, "password is required");
  } else if (passwordValue.element < 8) {
    createError(password, "password must be at least 8 characters");
  } else {
    createSuccess(firstName);
  }
};
