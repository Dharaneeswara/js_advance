  /*************************************************************************************
 *  Name of the challenge  : Date Validator (Regular Expression)                     *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/
   
  //Code Statements

let date=document.getElementById("dateId");
let resultId=document.getElementById("resultId");

function validate(){
  let regexPattern=/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[0-1])$/;
  let resultVal=date.value.match(regexPattern)

  // resultId.value=resultVal[0];
  // console.log(resultVal[0]);
  if(resultVal){  
    resultId.value="the date is Valid";
  }else{
    resultId.value="the date is InValid"
  }
  
  
}

function reset(){
  date.value="";
  resultId.value="";
}