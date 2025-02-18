/*            *************************************************************
 *  Name of the challenge  : Data Aggregation                 *
 *  Developed for          :                                  *
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

//-----------------------------------------------------------------------------------

let supplierTable = document.getElementById("supplierTable");
// console.log(dataTable.value);

// console.log(supplierSales[0].ProductID);

let dataTable = `
            <table style="width:100%;border-collapse: collapse; height:65vh">
                <thead>
                  <tr>
                    <th>ProductID</th>
                    <th>ProductName</th>
                    <th>UnitsInStock</th>
                    <th>UnitsOnOrder</th>
                    <th>UnitPrice</th>
                    <th>SupplierID</th>
                    <th>Discontinued</th>
                    //<th>Supplier</th>
                  </tr>
                </thead>
                <tbody id="tableBody"></tbody>
                </table>`;

    supplierTable.innerHTML = dataTable;
    let tablebody=document.getElementById("tableBody");

    supplierSales.forEach((suplier)=>{
        let rows=`
        <tr>
        <td>${suplier.ProductID}</td>
        <td>${suplier.ProductName}</td>
        <td>${suplier.UnitsInStock}</td>
        <td>${suplier.UnitsOnOrder}</td>
        <td>${suplier.UnitPrice}</td>
        <td>${suplier.SupplierID}</td>
        <td>${suplier.Discontinued}</td>
        <td>${suplier.Supplier.__deferred.uri}</td>
        </tr>`
        tablebody.innerHTML+=rows
    })
    // supplierTable.innerHTML += dataTable;
    // let count=0;
    
    
// supplierSales.forEach((suplier)=>{

//     // let dataValues = `
//     // <table style="table-layout: fixed;width:100%;height:7vh; border-collapse:collapse;text-align:center">
//     // <tbody>
//     // <tr>
//     // <td>${supplierSales[count].ProductID}</td>
//     // <td>${supplierSales[count].ProductName}</td>
//     // <td>${supplierSales[count].UnitsInStock}</td>
//     // <td>${supplierSales[count].UnitsOnOrder}</td>
//     // <td>${supplierSales[count].UnitPrice}</td>
//     // <td>${supplierSales[count].SupplierID}</td>
//     // <td>${supplierSales[count].Discontinued}</td>
//     // <td>${supplierSales[count].Supplier.__deferred.uri.endsWith.length}</td>
    
//     // </tr>
//     // </tbody>
//     // </table>`;
//     // count++
//     // console.log(dataValues);
//     // return dataValues;
//     // supplierTable.innerHTML += dataValues;
// })
