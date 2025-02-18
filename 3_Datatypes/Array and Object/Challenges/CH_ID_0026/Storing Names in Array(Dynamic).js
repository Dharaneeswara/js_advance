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

let userArray=[];
let userIndex=0;

let actorNmae=document.getElementById("actorsNameArrayInput");
let numOfActors=document.getElementById("numberOfActorsAdded");
let result=document.getElementById("arrayResultId");

function addActorsName(){

  // if(actorNmae.value==""){
    if(!actorNmae.value){
    alert("Please enter the Name Field");
    return;
  }

  userArray[userIndex]=actorNmae.value;
  userIndex++;
  actorNmae.value="";
  // document.getElementById("numberOfActorsAdded").innerHTML=`No. of Actors added : ${userIndex}`;
  numOfActors.innerHTML=`No. of Actors added : ${userIndex}`;
  
  // document.getElementById("arrayResultId").innerHTML=userArray.join(",<br> ");
}

function printArrayActorNames(){
  if(userIndex<=0){
    alert("there is no data found");
    return;
  }
  result.innerHTML=userArray.join(",<br> ");
}

function resetArrayInputs(){
  actorNmae.value="";
  userArray=[]
  numOfActors.innerHTML=`No. of Actors added : ${0}`;
  userIndex=0;
  document.getElementById("arrayResultId").innerHTML="";
}