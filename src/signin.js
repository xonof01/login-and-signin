let index = localStorage.getItem("users");
userss = JSON.parse(index);
const name = document.querySelector("#name");
const gmail = document.querySelector("#gmail");
const password = document.querySelector("#curent-password");
const form = document.querySelector("#form");
const btn = document.querySelector(".log-btn");

function validate() {
  if (name.value.length < 3) {
    alert("username must be more three characters");
    return false;
  }
  if (name.value == "") {
    alert("name cant be ` ` ");
    return false;
  }
  if (gmail.value == "") {
    alert("gmail cant be ``");
    return false;
  }
  if (password.value == "") {
    alert("password cant be ``");
    return false;
  }
  let valid = gmail.value.includes("@gmail.com");
  if (!valid) {
    alert("gmail is wrong");
    return false;
  }
  if (password.value == "123") {
    alert("password is to easy");
    return false;
  }
  return true;
}
let users = [];
let user;
btn.addEventListener("click", (event) => {
  let invalid = userss.forEach((element) => {
    if (element.name == name.value) {
      return false;
    }
  });
  let isValid = validate();
  if (!isValid) {
    return;
  }
  if (invalid) {
    alert("name has used");
    return;
  }

  user = {
    name: name.value,
    gmail: gmail.value,
    password: password.value,
    role: "user",
  };
  users.push(user);
  console.log(users);
  form.reset();
  localStorage.setItem("users", JSON.stringify(users));
  alert("you registed");
});
