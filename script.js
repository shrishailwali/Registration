let signupbtn = document.getElementById("signupBtn");
let loginbtn = document.getElementById("signinBtn");
let namefield = document.getElementById("nameField");
let titlefield = document.getElementById("titlefield");

loginbtn.onclick = function() {
  namefield.style.maxHeight = "0";
  titlefield.innerHTML = "Sign in";
  signupbtn.classList.add("disable");
  loginbtn.classList.remove("disable");
}

signupbtn.onclick = function() {
  namefield.style.maxHeight = "60px";
  titlefield.innerHTML = "Sign up";
  signupbtn.classList.remove("disable");
  loginbtn.classList.add("disable");
}