function validateLogin() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    if(email == ""){
      document.getElementById('emailError').innerHTML = " * Please enter your email address";
    }
    else{
      document.getElementById('emailError').innerHTML = '';
    }
    if(password == ""){
      document.getElementById('passwordError').innerHTML = ' * Please enter your password';
      return false;
    }
    else{
      document.getElementById('passwordError').innerHTML = '';
    }

    let storedUserData = JSON.parse(localStorage.getItem(email));

    if (storedUserData  && storedUserData.password === password) {
      window.location.href = "../pages/home-page.html";
    } else {
      document.getElementById('userError').textContent=' * Invalid email or password.';
      return false;
    }

}