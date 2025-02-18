//VARIABLE DECLARING
const fname = document.getElementById("fname");
const companies = document.getElementById("companies");
const designation = document.getElementById("designation");
const number = document.getElementById("number");
const mail = document.getElementById("mail");
const address = document.getElementById("address");
const country = document.getElementById("country");
const state = document.getElementById("state");
const pinCode = document.getElementById("pinCode");
const linkedIn = document.getElementById("linkedIn");
const faceBook = document.getElementById("faceBook");
const twitter = document.getElementById("twitter");
const instagram = document.getElementById("instagram");
const dataShow = document.getElementById("dataShow");
const register = document.getElementById("register");
const update = document.getElementById("update");
const reset = document.getElementById("reset");

let errorMsg=document.getElementsByClassName("errorMsg");

// let varArr=[fname,designation,number,mail,];

errorMsg[0].style.color="red";
errorMsg[1].style.color="red";
errorMsg[2].style.color="red";
errorMsg[3].style.color="red";
errorMsg[4].style.color="red";
errorMsg[5].style.color="red";
errorMsg[6].style.color="red";
errorMsg[7].style.color="red";
errorMsg[8].style.color="red";

fname.addEventListener("input",()=>{
  namePattern=/^[A-Z][a-z]+(\s[A-Za-z])*\s[A-z]{1,2}$/;
  namedidmatch=namePattern.test(fname.value);
  if(!namedidmatch){
    errorMsg[0].textContent="The name bust be start with capital letter and end with Initial's";
  }else{
    errorMsg[0].textContent="";
  }
})

designation.addEventListener("input",()=>{
  designationPattern=/^[A-Za-z]+(\s[A-Za-z\&]+)*$/;
  desigdidmatch=designationPattern.test(designation.value);
  if(!desigdidmatch){
    errorMsg[2].textContent="Start with capital letter for each word's";
  }else{
    errorMsg[2].textContent="";
  }
})

number.addEventListener("input",()=>{
  numberPattern=/^\(\+\d{1,3}\)\s[9,8,7,6]\d{9}$/;
  let currentValue = number.value;
  if (currentValue.length > 16) {
    number.value = currentValue.slice(0, 16);
  }
  numdidmatch=numberPattern.test(number.value);
  if(!numdidmatch){
    errorMsg[3].textContent="First enter the country code(+91) and start with (9,8,7,6)";
  }else{
    errorMsg[3].textContent="";
  }
})

mail.addEventListener("input",()=>{
  let mailPattern=/^[a-zA-z]+@[a-z]{1,5}\.[a-z]{1,4}$/;
  maildidmatch=mailPattern.test(mail.value);
  if(!maildidmatch){
    errorMsg[4].textContent="Email must be in this formate (abc@gmail.com)";
  }else{
    errorMsg[4].textContent="";
  }
})

pinCode.addEventListener("input",()=>{
  let pinCodePattern=/^\d{6}$/;
  let currentValue = pinCode.value;
  if(currentValue.length>6){
    pinCode.value = currentValue.slice(0, 6);
  }
  pinCodedidMatch=pinCodePattern.test(pinCode.value);
  if(!pinCodedidMatch){
    errorMsg[8].textContent="pincode must be in this formate (xxx xxx)";
  }else{
    errorMsg[8].textContent="";
  }
})

//VALUES FOR COMPANY LIST AND GETTING COMPANY VALUE FROM COMPAY LIST ARRAY
let companyList = ["ZOHO", "HCL", "Wipro", "TCS", "city", "Accenture"];

companyList.forEach((company) => {
  let option = document.createElement("option");
  option.textContent = company;
  companies.appendChild(option);
});

//FETCHING COUNTRY AND STATE FROM API
let countryData =
  " https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/refs/heads/master/json/countries%2Bstates%2Bcities.json";
let countryArr = [];
fetch(countryData)
  .then((responce) => {
    return responce.json();
  })
  //FETCHING COUNTRY NAMES
  .then((countries) => {
    countryArr = countries;
    countries.forEach((countryname) => {
      let option = document.createElement("option");
      option.textContent = countryname.name;
      country.appendChild(option);
    });
    //FETCHING STATES NAME BASED ON SELECTED COUNTRY
    country.addEventListener("change",(event)=>{
      let selectedCountry=event.target.value;
      let countryStates=countryArr.find((countrySta)=>{
        return selectedCountry===countrySta.name;
      })

      state.innerHTML="";
      
      if(selectedCountry && countryStates.states && countryStates.states.length>0){
        let stateObj=countryStates.states
        // console.log(stateObj);
        stateObj.forEach(statename=>{
          let option=document.createElement("option");
          option.textContent=statename.name;
          state.appendChild(option)
        })
      }
      else {
        // THIS IS FOR NO STATES COUNTRY
        let option = document.createElement("option");
        option.textContent = "No states available";
        state.appendChild(option);
      }

    })
    return country;
  });

let arrOfObj = JSON.parse(localStorage.getItem("detail")) || []; //in this the [] is used to avoid throwing error like while it is undefined of null
// console.log(arrOfObj);

//CLEARING THE VALUE
function clearing() {
  let elements = document.querySelectorAll(".formInput");
  elements.forEach((element) => {
    if (
      element.type == "text" ||
      element.type == "number" ||
      element.type == "email" ||
      element.type == "url"
    ) {
      element.value = "";
    }
  });
  companies.value = "";
  address.value = "";
  country.value = "";
  state.value = "";
}

function validation() {
  let isValid = true; // Assume all fields are valid

  // Name validation
  let namePattern = /^[A-Z][a-z]+(\s[A-Za-z])*\s[A-z]{1,2}$/;
  if (!fname.value.trim() || !namePattern.test(fname.value)) {
    errorMsg[0].textContent = "this field is missing";
    isValid = false;
  } else {
    errorMsg[0].textContent = "";
  }

  //Company validation
    if(companies.value=="Select Company here..."){
      errorMsg[1].textContent = "this field is missing";
      companies.style.height="45px"
    }else{
      errorMsg[1].textContent = "";
    }
  

  // Designation validation
  let designationPattern = /^[A-Za-z]+(\s[A-Za-z\&]+)*$/;
  if (!designation.value.trim() || !designationPattern.test(designation.value)) {
    errorMsg[2].textContent = "this field is missing";
    isValid = false;
  } else {
    errorMsg[2].textContent = "";
  }

  // Phone number validation
  let numberPattern = /^\(\+\d{1,3}\)\s[9,8,7,6]\d{9}$/;

  if (number.value.length > 16) {
    number.value = currentValue.slice(0, 16); // Ensure no more than 16 characters
  }
  if (!number.value.trim() || !numberPattern.test(number.value)) {
    errorMsg[3].textContent = "this field is missing";
    isValid = false;
    // if(number.value.length>10){
    //   return ;
    // }
  } else {
    errorMsg[3].textContent = "";
  }

  // Email validation
  let mailPattern = /^[a-zA-Z]+@[a-z]{1,5}\.[a-z]{1,4}$/;
  if (!mail.value.trim() || !mailPattern.test(mail.value)) {
    errorMsg[4].textContent = "this field is missing";
    mail.style.height="45px";
    isValid = false;
  } else {
    errorMsg[4].textContent = "";
  }

  //Country validation
  if(country.value=="Country"){
    errorMsg[6].textContent = "this field is missing";
  }else{
    errorMsg[6].textContent = "";
  }

  //States validation
  if(state.value=="State"){
    errorMsg[7].textContent = "this field is missing";
    state.style.height="45px";
  }else{
    errorMsg[7].textContent = "";
  }

  //Pincode validation
  let pinCodePattern=/^\d{6}$/;
  let currentValue = pinCode.value;
  if(currentValue.length>6){
    pinCode.value = currentValue.slice(0, 6);
  }
  // pinCodedidMatch=pinCodePattern.test(pinCode.value);
  if(!pinCode.value.trim() || !pinCodePattern.test(pinCode.value)){
    errorMsg[8].textContent="this field is missing";
    isValid = false;
  }else{
    errorMsg[8].textContent="";
  }

  return isValid; // Return true if all fields are valid, otherwise false
}



//REGISTER
// register.addEventListener("click", () => {
register.addEventListener("click",registerfn);

  function registerfn(){
  if(!validation()) {
    return;  // validation functon call
  }

  let objVal = {
    id: arrOfObj.length ? arrOfObj[arrOfObj.length - 1].id + 1 : 1,
    fnameVal: fname.value.trim(),
    companiesVal: companies.value.trim(),
    designationVal: designation.value.trim(),
    numberVal: number.value.trim(),
    mailVal: mail.value.trim(),
    addressVal: address.value.trim(),
    countryVal: country.value.trim(),
    stateVal: state.value.trim(),
    pinCodeVal: pinCode.value.trim(),
    linkedInVal: linkedIn.value.trim(),
    faceBookVal: faceBook.value.trim(),
    twitterVal: twitter.value.trim(),
    instagramVal: instagram.value.trim(),
  };

  arrOfObj.push(objVal);
  localStorage.setItem("detail", JSON.stringify(arrOfObj));

  alert("Your data's have been added Successfully!!!");
  displayData();
  clearing();
};
// });

//DISPLAY DATA FUNCTION
function displayData() {
  let fetchedVal = JSON.parse(localStorage.getItem("detail")) || [];
  let dataTable = `
        <table id="dataTableMsgs" style="width:100%; border-collapse: collapse; border:2px solid red">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Designation</th>
                <th>Personal Number</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="tableBody" style="border:2px solid black"></tbody>
        </table>`;
  dataShow.innerHTML = dataTable;
  let tablebody = document.getElementById("tableBody");
  tablebody.innerHTML = "";

  fetchedVal.forEach((localData) => {
    let rows = `
        <tr>
        <td>${localData.fnameVal}</td>
        <td>${localData.companiesVal}</td>
        <td>${localData.designationVal}</td>
        <td>${localData.numberVal}</td>
        <td>${localData.mailVal}</td>
        <td style="display:flex">
          <button type="button" class="edit-btn" data-id="${localData.id}">Edit</button>
          <button type="button" class="delete-btn" data-id="${localData.id}">Delete</button>
        </td>
        </tr>`;
    tablebody.innerHTML += rows;
  });

  document.querySelectorAll(".edit-btn").forEach((editBtn) => {
    editBtn.addEventListener("click", (event) => {
      let id = parseInt(event.target.getAttribute("data-id"));
      let editData = arrOfObj.find((item) => item.id === id);
      if (editData) {
        fname.value = editData.fnameVal;
        companies.value = editData.companiesVal;
        designation.value = editData.designationVal;
        number.value = editData.numberVal;
        mail.value = editData.mailVal;
        update.setAttribute("data-id", id);
        update.style.display = "block";
        register.style.display = "none";
      }
    });
  });
  document.querySelectorAll(".delete-btn").forEach((deletBtn) => {
    deletBtn.addEventListener("click", (event) => {
      let id = parseInt(event.target.getAttribute("data-id"));
      arrOfObj = arrOfObj.filter((item) => item.id !== id);
      localStorage.setItem("detail", JSON.stringify(arrOfObj));

      // Refresh the displayed data
      displayData();
    });
  });
}

// displayData();

//UPDATE
update.addEventListener("click", () => {
  let id = parseInt(update.getAttribute("data-id"));
  let index = arrOfObj.findIndex((item) => item.id === id);
  if (index !== -1) {
    arrOfObj[index] = {
      id,
      fnameVal: fname.value,
      companiesVal: companies.value,
      designationVal: designation.value,
      numberVal: number.value,
      mailVal: mail.value,
      addressVal: address.value,
      countryVal: country.value,
      stateVal: state.value,
      pinCodeVal: pinCode.value,
      linkedInVal: linkedIn.value,
      faceBookVal: faceBook.value,
      twitterVal: twitter.value,
      instagramVal: instagram.value,
    };
    localStorage.setItem("detail", JSON.stringify(arrOfObj));
    update.style.display = "none";
    register.style.display = "block";
    displayData();
    clearing();
  }
});

//RESET
reset.addEventListener("click", () => {
  clearing();
  localStorage.clear();
  // console.log(localStorage.length);
  // sessionStorage.clear();
  window.location.href =
    window.location.pathname + "?nocache=" + new Date().getTime();
  // localStorage.removeItem("detail");
  document.getElementById("dataTableMsgs").innerHTML = "";
});
