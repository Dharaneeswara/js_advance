  /*************************************************************************************
 *  Name of the Task       : Sum of two numbers                                             *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/
   // Function expression to calculate the sum of two numbers

  //Code Statements

  let firstItem=document.getElementById("firstItem");
  let secondItem=document.getElementById("secondItem");
  let resultId=document.getElementById("resultId");

  let buttonId=document.getElementById("buttonId");
  let resetId=document.getElementById("resetId");

  buttonId.addEventListener("click", function(){
    let sum=firstItem.valueAsNumber+secondItem.valueAsNumber;
    resultId.value=sum;
  })

  // buttonId.addEventListener("click", calculate);
  // function calculate(){
  //   let sum=firstItem.valueAsNumber+secondItem.valueAsNumber;
  //   resultId.value=sum;
  // }

  resetId.addEventListener("click", reset);
  let reset=function(){
    firstItem.value="";
    secondItem.value="";
    resultId.value="";
  }