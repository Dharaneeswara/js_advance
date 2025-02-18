let inputField = document.createElement("input");
inputField.setAttribute("type", "text");
document.body.appendChild(inputField);

let addbutton = document.createElement("button");
addbutton.setAttribute("id", "btn");
addbutton.textContent = "Add";
document.body.appendChild(addbutton);

let divBox = document.createElement("div");
divBox.setAttribute("class", "showBox");
divBox.style.width = "300px";
divBox.style.height = "300px";
divBox.style.border = "3px solid blue";
divBox.style.overflowY = "auto"; // Scroll if needed
document.body.appendChild(divBox);

document.getElementById("btn").addEventListener("click", () => {
  if (inputField.value.trim() === "") return;

  let listItem = document.createElement("li"); 
  listItem.style.display = "flex";
  listItem.style.justifyContent = "space-between";
  listItem.style.alignItems = "center";
  listItem.style.padding = "5px";

  let textSpan = document.createElement("span");
  textSpan.textContent = inputField.value;

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  
  removeBtn.addEventListener("click",()=>{
    divBox.removeChild(listItem);
  })

  listItem.appendChild(textSpan);
  listItem.appendChild(removeBtn);
  divBox.appendChild(listItem);

  inputField.value = "";
});
