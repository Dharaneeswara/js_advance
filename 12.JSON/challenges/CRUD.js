//CRUD CHALLENGE

//declaring variables
const employeeName = document.getElementById("employeeNameId");
const nameSpan = document.getElementById("nameSpan");
const employeeCompany = document.getElementById("selectCompany");
const employeeDesignation = document.getElementById("employeeDesignationId");
const designationSpan = document.getElementById("designationSpan");
const employeeMobile = document.getElementById("employeeMobileId");
const mobileSpan = document.getElementById("mobileSpan");
const employeeEmail = document.getElementById("employeeMailId");
const emailSpan = document.getElementById("emailSpan");
const employeeAddress = document.getElementById("employeeAddressId");
const employeeCountry = document.getElementById("employeeCountryId");
const employeeState = document.getElementById("employeeStateId");
const employeePincode = document.getElementById("employeePincodeId");
const spanBar = document.getElementById("spanBar");
const linkedInUrl = document.getElementById("linkedInId");
const facebookUrl = document.getElementById("facebookId");
const twitterUrl = document.getElementById("twitterId");
const instaUrl = document.getElementById("instaId");
const registerButton = document.getElementById("registerButton");
const updateButton = document.getElementById("updateButton");
const resetButton = document.getElementById("resetButton");
const formContainer = document.getElementsByClassName("form-container");


//NAME VALIDATION
let namePattern = /^[A-Z][a-zA-Z]*\s?[a-zA-Z]*$/;
employeeName.addEventListener("input", () => {
  if (!namePattern.test(employeeName.value)) {
    nameSpan.innerHTML =
      "*Name should start with Upper case and should be alphabetic characters";
    nameSpan.style.color = "red";
    nameSpan.style.fontSize = "smaller";
  } else {
    nameSpan.innerHTML = "";
  }
});


//DESIGNATION VALIDATION
let designationPattern = /^[A-Z][a-zA-Z]*\s?[a-zA-Z]*\s?[a-zA-Z]*$/;
employeeDesignation.addEventListener("input", () => {
  if (!designationPattern.test(employeeDesignation.value)) {
    designationSpan.innerHTML =
      "*Designation does not include numbers or characters";
    designationSpan.style.color ="red";
    designationSpan.style.fontSize ="smaller";
  } else {
    designationSpan.innerHTML = "";
  }
});


//PERSONAL NUMBER VALIDATION
//some country's code like+123,+12,,+1
let numberPattern = /^\+\d{1,3}\s?\d{10}$/;
employeeMobile.addEventListener("input", () => {
  if (!numberPattern.test(employeeMobile.value)) {
    mobileSpan.innerHTML =
      "*Enter mobile number with proper space and country code";
    mobileSpan.style.color = "red";
    mobileSpan.style.fontSize = "smaller";
  } else {
    mobileSpan.innerHTML = "";
  }
});


//EMAIL VALIDATION
let emailPattern = /^[a-z0-9.-_%+]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
employeeEmail.addEventListener("input", () => {
  if (!emailPattern.test(employeeEmail.value)) {
    emailSpan.style.paddingLeft = "50%";
    emailSpan.innerHTML = "*The email you entering should be valid and strong";
    emailSpan.style.color = "red";
    emailSpan.style.fontSize = "smaller";
  } else {
    emailSpan.innerHTML = "";
  }
});

//PINCODE VALIDATION
let pattern = /^[0-9]\d{0,5}$/;
employeePincode.addEventListener("input", () => {
  if (!pattern.test(employeePincode.value)) {
    spanBar.style.color = "red";
    spanBar.innerHTML = "*Enter valid Pincode";
  } else {
    spanBar.innerHTML = "";
  }
});

//Company drop down boxes
for (let key of companyArray) {
  const option = document.createElement("option");
  option.innerHTML = key;
  option.value = key;

  employeeCompany.append(option);
}

//COUNTRY AND STATES
//using async function to wait until fetching
async function employeeNexus(){
  //api fetched from git repository "https://github.com/dr5hn/countries-states-cities-database" in JSON file,countries+states file
  let apiUrl =
    "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/refs/heads/master/json/countries%2Bstates.json";

  await fetch(apiUrl)
    .then((response) => response.json())

    //iterating and getting country data and appending in the select element
    .then((countries) => {
      countries.forEach((country) => {
        const option1 = document.createElement("option");
        option1.innerHTML = country.name;
        option1.value = country.name;

        employeeCountry.append(option1);
      });

      //using addEvent Listener to achieve if certain country is clicked ,the states should be appear as it is
      employeeCountry.addEventListener("change", (event) => {
        //geting curent country name(value)
        const selectedCountry = event.target.value;

        //finding the chhosed country's object to store that as one data to easily fetch the states
        const selectedCountryObject = countries.find(
          (country) => country.name === selectedCountry
        );
        // employeeState.selectedIndex=0;
        employeeState.innerHTML = "<option>State</option>";
        //getting states from the choosen country object
        if (selectedCountryObject && selectedCountryObject.states) {
          selectedCountryObject.states.forEach((state) => {
            const option2 = document.createElement("option");
            option2.innerHTML = state.name;
            option2.value = state.name;

            employeeState.append(option2);
          });
        }
      });
    })
    .catch((error) => console.log("The fetched data is ", error));
}
employeeNexus();



//RGISTRATION BUTTON
//declaring newtable globally to initialize later and accessing
let newTable;
let line;
let count = 1;

//registration button 
registerButton.addEventListener("click", () => {

  //checking for invalid case
  if (
    employeeName.value === "" ||
    employeeCompany.value === "Company" ||
    employeeDesignation.value === "" ||
    employeeMobile.value === "" ||
    employeeEmail.value === "" ||
    employeeAddress.value === "" ||
    employeeCountry.value === "Country" ||
    employeeState.value === "State" ||
    employeePincode.value === "" ||
    linkedInUrl.value === "" ||
    facebookUrl.value === "" ||
    twitterUrl.value === "" ||
    instaUrl.value === ""
  ) {
    alert("Enter all required fields");
    return;
  }

  let employeeDetailArray=JSON.parse(localStorage.getItem('employeeDetailArray')) || [];
  const localObject=
    {
      id: Date.now(),
      EmployeeName : employeeName.value,
      EmployeeCompany : employeeCompany.value,
      EmployeeDesignation : employeeDesignation.value,
      EmployeeMobileNumber : employeeMobile.value,
      EmployeeEmail : employeeEmail.value,
      EmployeePincode : employeePincode.value,
      EmployeeCountry : employeeCountry.value,
      EmployeeState : employeeState.value,
      EmployeeAddress : employeeAddress.value
    }

    employeeDetailArray.push(localObject);
   localStorage.setItem('employeeDetailArray',JSON.stringify(employeeDetailArray));

  
  //ensuring it does not repeat the header row,so i used count here to perform condition
  if (count === 1) {
    line = document.createElement("hr");

    //creating table
    newTable = document.createElement("table");
    newTable.style.width = "100%";
    newTable.style.border = "1px solid black";
    newTable.style.textAlign = "center";
    
    //creating table head
    const tableHead = document.createElement("thead");
    tableHead.style.border = "1px solid black";
    tableHead.style.textAlign = "center";
    
    //creating table row
    const headRow = document.createElement("tr");
    

    //creating header column datas
    const tableData1 = document.createElement("td");
    tableData1.style.border = "1px solid black";
    tableData1.style.textAlign = "center";

    const tableData2 = document.createElement("td");
    tableData2.style.border = "1px solid black";
    tableData2.style.textAlign = "center";

    const tableData3 = document.createElement("td");
    tableData3.style.border = "1px solid black";
    tableData3.style.textAlign = "center";

    const tableData4 = document.createElement("td");
    tableData4.style.border = "1px solid black";
    tableData4.style.textAlign = "center";

    const tableData5 = document.createElement("td");
    tableData5.style.border = "1px solid black";
    tableData5.style.textAlign = "center";

    const tableData6 = document.createElement("td");
    tableData6.style.border = "1px solid black";
    tableData6.style.textAlign = "center";


    //table headers content
    tableData1.innerHTML = "Username";
    tableData2.innerHTML = "Company Name";
    tableData3.innerHTML = "Designation";
    tableData4.innerHTML = "Mobile Number";
    tableData5.innerHTML = "Email";
    tableData6.innerHTML = "Action";
    

    //appending datas to row
    headRow.append(
      tableData1,
      tableData2,
      tableData3,
      tableData4,
      tableData5,
      tableData6
    );

    //appending row to table head
    tableHead.append(headRow);
    //appending tableHead to new table 
    newTable.append(tableHead);
    //appending table to the form container
    formContainer[0].append(line, newTable);
    count++;
  }


  //now the header row is finished

  //creating data row
  const row = document.createElement("tr");
  
  //creating columns for data storage
  const data1 = document.createElement("td");
  data1.style.border = "1px solid black";
  data1.style.textAlign = "center";
  data1.innerHTML = employeeName.value;

  const data2 = document.createElement("td");
  data2.style.border = "1px solid black";
  data2.style.textAlign = "center";
  data2.innerHTML = employeeCompany.value;

  const data3 = document.createElement("td");
  data3.style.border = "1px solid black";
  data3.style.textAlign = "center";
  data3.innerHTML = employeeDesignation.value;

  const data4 = document.createElement("td");
  data4.style.border = "1px solid black";
  data4.style.textAlign = "center";
  data4.innerHTML = employeeMobile.value;

  const data5 = document.createElement("td");
  data5.style.border = "1px solid black";
  data5.style.textAlign = "center";
  data5.innerHTML = employeeEmail.value;

  const data6 = document.createElement("td");
  data6.style.border = "1px solid black";
  data6.style.textAlign = "center";

  //edit button creation
  const editButton = document.createElement("button");
  editButton.style.marginRight = "10px";
  editButton.style.padding = "5px 10px";
  editButton.style.backgroundColor = "red";
  editButton.innerHTML = "EDIT";

  //edit button addevent listener
  editButton.addEventListener("click",(event)=>{
   //geting parent of data (column) and parent of column(row)
    const gettingParentRow=event.target.parentElement.parentElement;
    const updatingValue=gettingParentRow.querySelectorAll("td");

    //filling datas to the input boxes from data column
    employeeName.value=updatingValue[0].innerHTML;
    employeeCompany.value=updatingValue[1].innerHTML;
    employeeDesignation.value=updatingValue[2].innerHTML;
    employeeMobile.value=updatingValue[3].innerHTML;
    employeeEmail.value=updatingValue[4].innerHTML;
    

    //making registration button hidden and update button display
    updateButton.style.display="block";
    registerButton.style.display="none";
    
    //UPDATE BUTTON EVENT
    updateButton.addEventListener("click",()=>{
      updatingValue[0].innerHTML=employeeName.value;
      updatingValue[1].innerHTML= employeeCompany.value;
      updatingValue[2].innerHTML=employeeDesignation.value;
      updatingValue[3].innerHTML= employeeMobile.value;
      updatingValue[4].innerHTML=employeeEmail.value;

      //making again the buttons to old form
      updateButton.style.display="none";
      registerButton.style.display="block";
  
  //again reting all to null after updating using querySelector
  const elements = document.querySelectorAll(".formInput");
  elements.forEach((element) => {
    if (
      element.type === "text" ||
      element.type === "number" ||
      element.type === "email" ||
      element.type === "url"
    ) {
      element.value = "";
    }
  });
  employeeCompany.value = "Company";
  employeeAddress.value = "";
  employeeCountry.value = "Country";
  employeeState.innerHTML = "<option>State</option>";

    })

  })


  //delete button creation
  const deleteButton = document.createElement("button");
  deleteButton.style.padding = "5px 10px";
  deleteButton.style.backgroundColor = "green";
  deleteButton.innerHTML = "Delete";


  // //deleting row using dom method("removeChild")
  // deleteButton.addEventListener("click", () => {
  //   // row.remove();
  
  //     newTable.removeChild(row);
  //   });

  deleteButton.addEventListener("click", () => {
    // Get the unique ID from the row's data (stored in a hidden attribute or using the text)
    const rowId = employeeDetailArray.find(emp => emp.EmployeeName === data1.innerHTML).id;
  
    // Remove the row from the table
    newTable.removeChild(row);
  
    // Remove the data from localStorage
    employeeDetailArray = employeeDetailArray.filter(emp => emp.id !== rowId);
    localStorage.setItem('employeeDetailArray', JSON.stringify(employeeDetailArray));
  });
  
    

  

  //appending buttons to data column
  data6.append(editButton, deleteButton);

  //appending datas to the row
  row.append(data1, data2, data3, data4, data5, data6);

  //appending row to the table
  newTable.append(row);



  //after appending all datas to the row resting the values of input boxes
  const elements = document.querySelectorAll(".formInput");
  elements.forEach((element) => {
    if (
      element.type === "text" ||
      element.type === "number" ||
      element.type === "email" ||
      element.type === "url"
    ) {
      element.value = "";
    }
  });
  employeeCompany.value = "Company";
  employeeAddress.value = "";
  employeeCountry.value = "Country";
  employeeState.innerHTML = "<option>State</option>";
});



//RESET FUNCTION
//reseting using querySelector
resetButton.addEventListener("click", () => {
  const elements = document.querySelectorAll(".formInput");
  elements.forEach((element) => {
    if (
      element.type === "text" ||
      element.type === "number" ||
      element.type === "email" ||
      element.type === "url"
    ) {
      element.value = "";
    }
  });
  employeeCompany.value = "Company";
  employeeAddress.value = "";
  employeeCountry.value = "Country";
  employeeState.innerHTML = "<option>State</option>";
  newTable.innerHTML='';
  line.style.display='none';
  
  
});


