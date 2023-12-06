document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById("password");
    const togglePasswordIcon = document.getElementById("togglePassword");
  
    togglePasswordIcon.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordIcon.classList.remove("far", "fa-eye");
        togglePasswordIcon.classList.add("fas", "fa-eye-slash");
      } else {
        passwordInput.type = "password";
        togglePasswordIcon.classList.remove("fas", "fa-eye-slash");
        togglePasswordIcon.classList.add("far", "fa-eye");
      }
    });
  });
  