const emailInput = document.getElementById("email-input");
const invalidMsg = document.getElementById("invalid-toast");
const successMsg = document.getElementById("success-toast");

const form = document.querySelector(".form");

function validateEmail(emailValue){
  let value = /\S+@\S+\.\S+/;
  return value.test(emailValue);
}9
form.addEventListener("submit", function(e){
  e.preventDefault()
  setTimeout(()=>form.submit(),2000)
  if(validateEmail(emailInput.value)){
    successMsg.classList.add("active");
  }else{
    successMsg.classList.remove("active");
  }
});