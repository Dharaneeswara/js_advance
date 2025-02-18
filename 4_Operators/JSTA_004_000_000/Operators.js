  /*************************************************************************************
 *  Name of the Task       : Operators                                               *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/
   
  //Code Statements

  let firstPrice=document.getElementById("firstItem");
  let secondPrice=document.getElementById("secondItem");
  let discountPercentage=document.getElementById("discountPrice");
  
  function calculatevalue(){

    if(firstPrice.value=="" || secondPrice.value=="" || discountPercentage.value==""){
      alert("Please Enter all fields");
      return;
    }

    let addOfPrice=firstPrice.valueAsNumber+secondPrice.valueAsNumber;
    console.log(addOfPrice);
    
    
    let discountAmount=(addOfPrice*discountPercentage.value)/100;
    console.log(discountAmount);

    // console.log(addOfPrice/discountPercentage.value); ------------ it is the anither way of calculating discount amount. but not standard.
    
    let discountPrice=addOfPrice-discountAmount;
    // console.log(discountPrice);
    

    document.getElementById("resultId").value=discountPrice;
  }

  function reset(){
    firstPrice.value="";
    secondPrice.value="";
    discountPercentage.value="";
    document.getElementById("resultId").value="";
  }