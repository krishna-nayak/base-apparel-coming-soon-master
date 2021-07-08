let email = document.querySelector(".input-box");
let btn = document.querySelector(".send-btn");
let error = document.querySelector(".error-text");
let errorIcon = document.querySelector(".icon-error");

btn.addEventListener("click", function (e) {
  //   console.log(email.value);
  let mailAddress = email.value;
  let emailRegex = /[A-za-z0-9_.]+@[A-Za-z]+.[a-z]{2,3}$/;
  let condition = emailRegex.test(mailAddress);
  console.log(condition);
  if (!condition) {
    error.style.visibility = "visible";
    errorIcon.style.visibility = "visible";
    errorIcon.classList.add("animate__animated", "animate__shakeX");
    error.classList.add("animate__animated", "animate__shakeX");
  } else {
    error.style.visibility = "hidden";
    errorIcon.style.visibility = "hidden";
  }
  setTimeout(function (e) {
    errorIcon.classList.remove("animate__animated", "animate__shakeX");
    error.classList.remove("animate__animated", "animate__shakeX");
    console.log("animation-reset ✅");
  }, 1000);
});
