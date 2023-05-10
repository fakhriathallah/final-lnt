const form = document.getElementById("forms");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email1");
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const dropdown = document.getElementById("dropdown");

  if (!validateEmail(email.value)) {
    alert("Please enter a valid email address.");
    email.focus();
    return false;
  }

  if (!validateName(name.value)) {
    alert("Please enter a name with at least 3 characters.");
    password.focus();
    return false;
  }

  if (!validatePhone(phone.value)) {
    alert(
      "Please enter a phone number with maximum 14-digit phone number, first digit is 0 and second digit is 8."
    );
    phone.focus();
    return false;
  }

  if (!validateDropdown(dropdown.value)) {
    alert("Please select an option from the dropdown.");
    dropdown.focus();
    return false;
  }

  // Form is valid, submit it
  alert("Form submitted successfully!");
  form.submit();
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateName(name) {
  return name.length >= 3;
}

function validatePhone(phone) {
  const firstDigit = 1;
  const secondDigit = 2;
  if (
    phone.length <= 14 &&
    phone.charAt(0) == firstDigit &&
    phone.charAt(1) == secondDigit
  ) {
    return false;
  }
}

function validateDropdown(dropdown) {
  return dropdown !== "";
}
