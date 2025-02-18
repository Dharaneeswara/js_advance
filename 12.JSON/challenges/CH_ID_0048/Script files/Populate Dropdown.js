/*            *************************************************************
              *  Name of the challenge  : Populate Dropdown                *
              *  Developed for          : VHITECH Training Program         *
              *               Maintenance History                          *
              *  Developer              :                                  *
              *  Creation date           :               Ticket No:        *
              ************************************************************* */

// Declaration
// Screen date and time declaration.
// let displayDate = new Date();
// //Modal
// const toggleSuccessModal = () => successModal.classList.toggle("active");
// const toggleErrorModal = () => errorModal.classList.toggle("active");
// window.addEventListener("click", function (event) {
//   if (event.target === successModal) successModal.classList.remove("active");
//   if (event.target === errorModal) errorModal.classList.remove("active");
// });

//      //copy to clipboard
// const copyText = document.querySelector("#copy");
//       copyText.addEventListener("click", () => {
//         navigator.clipboard.writeText(
//           document.querySelector("#successCode").value
//         );
//         copyText.textContent = "copied";
//         setTimeout(() => {
//           copyText.innerHTML = `<span>&#128203; </span>copy`;
//         }, 2000);
//       });

let countriesId=document.getElementById("countriesId");
let capitalId=document.getElementById("capitalId");

let countryArr=[];

fetch("https://restcountries.com/v3.1/all")

.then(responce=>{
    return responce.json()
})
.then(contries=>{
    // console.log(res);
    // console.log(contries);
    countryArr=contries;
    // console.log(countryArr);
    

    contries.forEach(countrie => {
        let option=document.createElement("option");
        option.textContent=countrie.name.common;
        
        countriesId.appendChild(option);
    });

    countriesId.addEventListener("change",(event)=>{
        const selected=event.target.value;
        // alert(`selected country is : ${selected}`);
        // confirm(`are you selected ${selected} country`)
        let countryObj=countryArr.find((country)=>{
            return selected===country.name.common
        })

        capitalId.innerHTML="";
        // capitalId.value="";
        if(selected && countryObj.capital){
            let option=document.createElement("option");
            option.setAttribute("class","first");
            
            option.textContent=countryObj.capital
            // let f=document.getElementsByClassName("first");
            // console.log(f[1]);
            // if(f[1]){
            //     capitalId.innerHTML="";
            // }
            capitalId.appendChild(option)
            // console.log(selected);
            // console.log(countryObj.capital);
            // console.log(countryObj);
        }

    });
});


//Declarations 
// const countryAPI = 'https://restcountries.com/v3.1/all';

