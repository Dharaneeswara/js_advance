let actorName1=document.getElementById("actorNameInput1")
let actorName2=document.getElementById("actorNameInput2")
let actorName3=document.getElementById("actorNameInput3")


function printNames(){


  if(actorName1.value=="" || actorName2.value=="" || actorName3.value==""){
    alert("Please Enter all the fields");
    document.getElementById("variableResultsId").innerHTML=""
    return;
  }

  document.getElementById("variableResultsId").innerHTML=`
  <ul>
    <li>${actorName1.value}</li>
    <li>${actorName2.value}</li>
    <li>${actorName3.value}</li>
  </ul>
  `
}
function reset(){
  actorName1.value="";
  actorName2.value="";
  actorName3.value="";
  document.getElementById("variableResultsId").innerHTML="";

}




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

