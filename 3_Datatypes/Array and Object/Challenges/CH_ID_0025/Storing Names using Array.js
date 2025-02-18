// // Declaration
// // Screen date and time declaration.
// let displayDate = new Date();

// //Modal
// const toggleSuccessModal = () => successModal.classList.toggle("active");
// const toggleErrorModal = () => errorModal.classList.toggle("active");
// window.addEventListener("click", function (event) {
//   if (event.target === successModal) successModal.classList.remove("active");
//   if (event.target === errorModal) errorModal.classList.remove("active");
// });

// //copy to clipboard
// const copyText = document.querySelector("#copy");
// copyText.addEventListener("click", () => {
//   navigator.clipboard.writeText(document.querySelector("#successCode").value);
//   copyText.textContent = "copied";
//   setTimeout(() => {
//     copyText.innerHTML = `<span>&#128203; </span>copy`;
//   }, 2000);
// });

// //Input declaration

let userarray = [
  document.getElementById("actorNameArrayInput1"),
  document.getElementById("actorNameArrayInput2"),
  document.getElementById("actorNameArrayInput3"),
];
// let userindex=0;

// userarray[0]=document.getElementById("actorNameArrayInput1");
// userarray[1]=document.getElementById("actorNameArrayInput2");
// userarray[2]=document.getElementById("actorNameArrayInput3");

function printArrayActorNames() {
  if (
    userarray[0].value == "" ||
    userarray[1].value == "" ||
    userarray[2].value == ""
  ) {
    alert("Please Enter all the fields");
    document.getElementById("arrayResultId").innerHTML = "";
    return;
  }

  document.getElementById("arrayResultId").innerHTML = `
<ul>
  <li>${userarray[0].value}</li>
  <li>${userarray[1].value}</li>
  <li>${userarray[2].value}</li>
</ul>`;
}

function resetArrayInputs() {
  userarray[0].value = "";
  userarray[1].value = "";
  userarray[2].value = "";
  document.getElementById("arrayResultId").innerHTML = "";
}
