let emailInput = document.querySelector("#email");
let submitBtn = document.querySelector("form button");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (regEx.test(emailInput.value)) {
    document.querySelector('.card').style.display = 'none'
    document.querySelector('.thanks-msg').style.display = 'flex'
  } else {
    emailInput.classList.add("warning");
    document.querySelector("form > div span").classList.add("warning");
  }
});
