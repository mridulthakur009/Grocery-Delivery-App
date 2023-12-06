function validateForm() {
  let firstName = document.getElementById("fName").value.trim();
  let lastName = document.getElementById("lName").value.trim();
  let email = document.getElementById("email").value.trim();
  let mobileNumber = document.getElementById("mobNumber").value.trim();
  let password = document.getElementById("password").value.trim();
  let agreeTerms = document.getElementById("agreeTerms").checked;

  let firstNameRegex = /^[a-zA-Z]+$/;
  if (!firstNameRegex.test(firstName)) {
    document.getElementById("firstNameError").textContent = "* First name must only contain letters.";
  } 
  else {
    document.getElementById("firstNameError").textContent = "";
  }

  if (firstName.length > 15) {  
    document.getElementById("firstNameError").textContent = "* First name must be less than 10 characters.";
  }

  let lastNameRegex = /^[a-zA-Z]+$/;
  if (!lastNameRegex.test(lastName)) {
    document.getElementById("lastNameError").textContent = "* Last name must only contain letters.";
  } 
  else {
    document.getElementById("lastNameError").textContent = "";
  }

  if (lastName.length > 15) {
    document.getElementById("lastNameError").textContent = "* Last name must be less than 10 characters.";
  }

  let emailRegex = /^[\w-._]+@[\w-._]+\.[a-zA-Z]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "* Please enter a valid email address.";
  } 
  else {
    document.getElementById("emailError").textContent = '';
  }

  let mobileNumberRegex = /^[0-9]{10}$/;
  if (!mobileNumberRegex.test(mobileNumber)) {
    document.getElementById("mobileNumberError").textContent = "* Mobile number must be 10 digits and only contain numbers.";
  } 
  else {
    document.getElementById("mobileNumberError").textContent = '';
  }

  let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent = "* Password must be between 8 and 16 characters, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    return false;
  } 
  else {
    document.getElementById("passwordError").textContent = '';
  }
  if (!agreeTerms) {
    termsError.textContent = "* Please agree to the terms of service.";
    return false;
  } 
  else {
    termsError.textContent = '';
  }

  if(localStorage.getItem(email)){
    alert("Email is already in use");
    return false;
  }

  let userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    mobileNumber: mobileNumber,
    password: password
  };

  localStorage.setItem(email, JSON.stringify(userData));

window.location.href = "../pages/home-page.html";

}