let passInput = document.querySelector("#passwordInput");
let passConfirm = document.querySelector("#confirm");
const check = function() {
    if (passInput.value ===
      passConfirm.value) {
        passConfirm.setCustomValidity('');
    } else {
      passConfirm.setCustomValidity("Passwords do not match")
    }
  }


passInput.addEventListener("change", check());
passConfirm.addEventListener("change", check());