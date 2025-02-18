/*            *************************************************************
              *  Name of the challenge  :                                  *
              *                                                            *
              *  Developed for          : VHITECH Training Program         *
              *               Maintenance History                          *
              *  Developer              :                                  *
              *  Creation date           :                Ticket No:        *
              ************************************************************* */

// Declaration
// Screen date and time declaration.
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML = displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML = displayDate.toLocaleTimeString();


//Input declaration
let sname=document.getElementById("stringId");
let rnum=document.getElementById("rollId");
let cname=document.getElementById("courseId");

let result=document.getElementById("resultId");


//Code Statements
let strregex = /^[A-Za-z]+(\s[A-Za-z])?\s[A-Za-z]+$/; 
// let numregex = /^\d*$/;
let numregex = /^[0-9]+$/;
let courseregex = /^[A-Za-z\s\&]+$/;  

function inputValidation() {
    result.innerHTML = "";  
    
    // Matching the values with the regex
    let nameval = sname.value.match(strregex);
    let numval = rnum.value.match(numregex);
    let courseval = cname.value.match(courseregex);

    // Check if all fields match the regex
    if (nameval && numval && courseval) {
        result.innerHTML += `${nameval[0]} \n${numval[0]} \n${courseval[0]}`;
    } else {
        result.innerHTML += "Please fill all fields in the correct format.";
    }
}


function reset(){
    sname.value="";   
    rnum.value="";   
    cname.value="";  
    
    result.innerHTML = "";
}