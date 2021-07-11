let email = document.querySelector("input");
let btn = document.querySelector("button");
let error = document.querySelector("#error-text");
let errorIcon = document.querySelector("#error-icon");
// console.log(email);

function validCheck() {
  let mailAddress = email.value;
  let emailRegex = /^[A-za-z0-9_.]{3,}@[A-Za-z]+\.[a-z]{2,3}$/;
  let condition = emailRegex.test(mailAddress);
  // console.log(condition);
  if (!condition) {
    error.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
    email.classList.add("border-red-400");
    errorIcon.classList.add("animate__animated", "animate__shakeX");
    // error.classList.add("animate__animated", "animate__shakeX");
    console.log("invalid-email ❌");
  } else {
    error.classList.add("hidden");
    errorIcon.classList.add("hidden");
    email.classList.remove("border-red-400");
    console.log("valid-email ✅");
    window.location.reload();
  }
  setTimeout(function () {
    errorIcon.classList.remove("animate__animated", "animate__shakeX");
    // console.log("animation-reset ✅");
  }, 1000);
}

btn.addEventListener("click", validCheck);

email.addEventListener("keypress", function (e) {
  if (e.key === "Enter") validCheck();
});
