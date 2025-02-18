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
  let resultId=document.getElementById("resultId");

  let buttonId=document.getElementById("buttonId");
  let resetId=document.getElementById("resetId");

  buttonId.addEventListener("click", function(){
    let val = (firstItem.valueAsNumber-32) * 5/9;
    console.log(val.toFixed(2));
    resultId.value=val
    
  })

  resetId.addEventListener("click",reset);

  function reset(){
    firstItem.value="";
    resultId.value="";
  }