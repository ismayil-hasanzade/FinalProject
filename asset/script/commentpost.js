// //Commentleri Api a gondermek//
// const id_s = window.location.hash.slice(1);
// console.log(id_s);
// const submitbtn = document.querySelector(".submitbtn");
// const nameinput = document.querySelector(".name input");
// const email = document.querySelector(".email input");
// const textarea = document.querySelector(".textarea");

// submitbtn.addEventListener("click", () => {
//   if (nameinput.value == "" || email.value == "" || textarea.value == "") {
//     alert("Inputlari tam doldurun");
//   } else {
//     console.log(nameinput.value);
//     console.log(email.value);
//     console.log(textarea.value);

//     fetch(`http://localhost:3000/Product/${id_s}`, {
//       method: "POST",
//       body: JSON.stringify({
//         review: textarea.value,
//         commentname: nameinput.value,
//         email: email.value,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//   }
// });
