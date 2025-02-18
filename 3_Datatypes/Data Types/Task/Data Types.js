/*************************************************************************************
 *  Name of the Task       : Data Types(Object Creation)                             *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                                                                                   *
 *                                                                                   *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/
//Create an Object with Book Details
//Date and Time declaration
// let displayDate = new Date();
// document.getElementById("dateOutput").innerHTML = displayDate.toLocaleDateString();
// document.getElementById("timeOutput").innerHTML = displayDate.toLocaleTimeString();
//Code Statements

let book_details = {
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  genre: "Fantasy",
  published: 1954
};

document.getElementById("book_details").innerHTML = `${book_details.title},<br> ${book_details.author},<br> ${book_details.genre},<br> ${book_details.published}.`;
console.log( `${book_details.title},<br> ${book_details.author},<br> ${book_details.genre},<br> ${book_details.published}.`);
