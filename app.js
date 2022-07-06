const passwordVal1 = document.querySelector("#password");
const passwordVal2 = document.querySelector("#password-confirm");
const submitBtn = document.querySelector("#submit-button");
const messages = document.querySelectorAll(".message");

submitBtn.addEventListener("click", (req, res) => {
  let text = (color = "");
  if (passwordVal1.value === passwordVal2.value) {
    text = "All perfect!!!";
    color = "green";
  } else {
    text = "Oh No!!! Passwords don't match.";
    color = "red";
  }
  console.log(text);
  messages.forEach((msg) => {
    msg.innerText = text;
    msg.style.color = color;
  });
});
