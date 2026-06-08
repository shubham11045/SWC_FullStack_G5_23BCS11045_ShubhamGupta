const form = document.getElementById("signupForm");

const validators = {
  required(value) {
    return value.trim() !== "";
  },

  email(value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  },

  password(value) {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return passwordPattern.test(value);
  }
};

const fields = {
  name: [
    {
      rule: "required",
      message: "Name is required"
    }
  ],

  email: [
    {
      rule: "required",
      message: "Email is required"
    },
    {
      rule: "email",
      message: "Enter a valid email address"
    }
  ],

  password: [
    {
      rule: "required",
      message: "Password is required"
    },
    {
      rule: "password",
      message: "Password must be 8+ chars, include uppercase, number and special character"
    }
  ]
};

function showError(input, message) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error");

  input.classList.add("invalid");
  input.classList.remove("valid");
  error.textContent = message;
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error");

  input.classList.remove("invalid");
  input.classList.add("valid");
  error.textContent = "";
}

function validateField(input) {
  const fieldRules = fields[input.id];

  for (let validation of fieldRules) {
    const isValid = validators[validation.rule](input.value);

    if (!isValid) {
      showError(input, validation.message);
      return false;
    }
  }

  showSuccess(input);
  return true;
}

function validateForm() {
  let isFormValid = true;

  Object.keys(fields).forEach((fieldId) => {
    const input = document.getElementById(fieldId);

    if (!validateField(input)) {
      isFormValid = false;
    }
  });

  return isFormValid;
}

Object.keys(fields).forEach((fieldId) => {
  const input = document.getElementById(fieldId);

  input.addEventListener("input", () => {
    validateField(input);
  });
});

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const isValid = validateForm();

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();

    Object.keys(fields).forEach((fieldId) => {
      document.getElementById(fieldId).classList.remove("valid");
    });
  }
});
