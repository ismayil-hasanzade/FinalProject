const userp = document.querySelector(".user p");
const passp = document.querySelector(".password p");
const eye = document.querySelector(".fa-eye");
const userInput = document.querySelector(".user input");
const passInput = document.querySelector(".password input");
const remember = document.querySelector(".remember");
const loginbtn = document.querySelector(".loginbtn");

userInput.addEventListener("input", () => {
  if (userInput.value != "") {
    userp.style.cssText = `
    transition: transform 300ms ease-out;
    transform: translateY(-4px);
        opacity: 1;
        height: auto;
      `;
    userInput.style.cssText = `
        transition: transform 300ms ease-out;
        transform: translateY(2px);
      `;
  } else {
    userp.style.cssText = `    
        height: 0;
       
      `;
    userInput.style.cssText = `
        transition: transform 300ms ease-out;
        transform: translateY(0);
      `;
  }
});
passInput.addEventListener("input", () => {
  if (passInput.value != "") {
    passp.style.cssText = `
      transition: transform 300ms ease-out;
      transform: translateY(-4px);
          opacity: 1;
          height: auto;
        `;
    passInput.style.cssText = `
          transition: transform 300ms ease-out;
          transform: translateY(2px);
        `;
  } else {
    passp.style.cssText = `    
          height: 0;
         
        `;
    passInput.style.cssText = `
          transition: transform 300ms ease-out;
          transform: translateY(0);
        `;
  }
});

eye.addEventListener("click", () => {
  if (passInput.type == "text") {
    passInput.type = "password";
  } else if (passInput.type == "password") {
    passInput.type = "text";
  }
});
remember.addEventListener("click", () => {
  remember.classList.toggle("change");
});
loginbtn.addEventListener("click", () => {
  fetch("http://localhost:3000/Users")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        let users = [];

        if (userInput.value !== "" && passInput.value !== "") {
          if (
            userInput.value === element.Username &&
            passInput.value === element.Password
          ) {
            users.push(userInput.value, passInput.value);
            localStorage.setItem("users", JSON.stringify(users));

            // window.open("index.html");
            console.log("login");
          } else {
            alert("Istifadəçi adı və ya parol yanlışdır");
          }
          window.location.reload();
        }
      });
    });
});
