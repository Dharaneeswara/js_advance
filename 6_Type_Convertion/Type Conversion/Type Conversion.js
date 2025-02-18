  /*************************************************************************************
 *  Name of the Task       : Type Conversion                                         *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                            Maintenance History                                    *
 *                                                                                   *
//  *************************************************************************************/
//    Create an object named bookDetails with the following properties: BOOK NAME,AUTHOR NAME,PUBLISHED YEAR,PRICE.
//  1.Use the JSON.stringify method to convert the bookDetails object into a JSON-formatted string.
  
//Code Statements
let display=document.getElementById("displayResult");
let bookDetails={
  bookName:"Steve Jobs",
  authorName:"About the author",
  publishedYear:2011,
  price:17
}

let str=JSON.stringify(bookDetails);
display.innerHTML=str

