/*            *************************************************************
              *  Name of the challenge   : Factorial : Recursive function  *
              *  Developed for           : VHITECH Training Program        *
              *               Maintenance History                          *
              *  Developer               :                                 *
              *  Creation date           :               Ticket No:        *
              ************************************************************* */

// Declaration
// Date and time declaration.
let displayDate = new Date();
//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});

     //copy to clipboard
const copyText = document.querySelector("#copy");
  copyText.addEventListener("click", () => {
    navigator.clipboard.writeText(
      document.querySelector("#successCode").value
    );
    copyText.textContent = "copied";
    setTimeout(() => {
    copyText.innerHTML = `<span>&#128203; </span>copy`;
  }, 2000);
});


let num=document.getElementById("numberId");
let res=document.getElementById("resultId");

let buttonId=document.getElementById("buttonId");
let resetId=document.getElementById("resetId");


// buttonId.addEventListener("click",fact(n));
function fact(n){
  if(n<=1){
    return 1;
  }else{
    return n*fact(n-1);
  }
}

function output(){

  if(num.value==""){
    alert("Fill the field first");
    return;;
  }
  resetId.value="";
  console.log(fact(num.valueAsNumber));
  let result=fact(num.valueAsNumber);
  res.value=result;
  
}


buttonId.addEventListener("click",output);


resetId.addEventListener("click",()=>{
  num.value="";
  res.value="";
})