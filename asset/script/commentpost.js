//Commentleri Api a gondermek//
// const id = window.location.hash.slice(1);
const submitbtn = document.querySelector(".submitbtn");
const nameinput = document.querySelector(".name input");
const email = document.querySelector(".email input");
const textarea = document.querySelector(".textarea");

submitbtn.addEventListener("click", () => {
  console.log("test");
  if (nameinput.value == "" || email.value == "" || textarea.value == "") {
    alert("Inputlari tam doldurun");
  } else {
    fetch(`http://localhost:3000/Product/${id}/`, {
      method: "POST",
      body: JSON.stringify({
        review: textarea.value,
        commentname: nameinput.value,
        email: email.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }
});
