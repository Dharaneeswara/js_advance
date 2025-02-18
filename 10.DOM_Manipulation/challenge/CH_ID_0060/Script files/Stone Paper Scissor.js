// /*            *************************************************************
//               *  Name of the challenge  : Stone Paper Scissor               *
//               *  Developed for          : VHITECH Training Program          *
//               *               Maintenance History                           *
//               *  Developer              :                                   *
//               *  Creation date           :                 Ticket No:       *
//               ************************************************************* */

// // Declaration
// // Screen date and time declaration.
// // let displayDate = new Date();
// // document.getElementById("dateOutput").innerHTML = displayDate.toLocaleDateString();
// // document.getElementById("timeOutput").innerHTML = displayDate.toLocaleTimeString();

// // Score and Counter Elements
// let countVal = document.getElementById("count");
// let userImage = document.getElementById("userImage");
// let cpuImage = document.getElementById("cpuImage");
// let ourScore = document.getElementById("ourScore");
// let cpuScores = document.getElementById("cpuScores");

// // Game Counters
// let countLength = 10;
// let count = parseInt(countLength);
// let userCount = 0;
// let cpuCount = 0;

// // UI Elements
// let displayScore = document.getElementById("displayScore");
// let displaybtn = document.getElementById("displaybtn");
// displaybtn.style.padding = "10px";

// // Image Buttons (User Choices)
// let stone = createImageButton("stn", "./images/stone1.png");
// let paper = createImageButton("pap", "./images/paper.png");
// let scissor = createImageButton("sciss", "./images/scissor.png");

// // Append Buttons to Display
// displaybtn.appendChild(stone);
// displaybtn.appendChild(paper);
// displaybtn.appendChild(scissor);

// // Function to Create Image Buttons
// function createImageButton(id, src) {
//     let img = document.createElement("img");
//     img.setAttribute("id", id);
//     img.src = src;
//     img.style.width = "70px";
//     img.style.margin = "20px";
//     return img;
// }

// // User Image Function
// function set_image() {
//     while (userImage.firstChild) {
//         userImage.removeChild(userImage.firstChild);
//     }
    
//     let set_imageTag = document.createElement("img");
//     set_imageTag.setAttribute("id", "clisked_image");
//     userImage.appendChild(set_imageTag);

//     return set_imageTag;
// }

// // CPU Random Image Generator
// let image_array = ["stone1.png", "paper.png", "scissor.png"];

// function get_random_image() {
//     while (cpuImage.firstChild) {
//         cpuImage.removeChild(cpuImage.firstChild);
//     }

//     let random_index = Math.floor(Math.random() * image_array.length);
//     let selected_image = image_array[random_index];

//     let imgTag = document.createElement("img");
//     imgTag.setAttribute("id", "image_shower");
//     cpuImage.appendChild(imgTag);

//     let show_image = document.getElementById("image_shower");
//     show_image.src = `./images/${selected_image}`;
    
//     return imgTag;
// }

// // Button Click Events
// stone.addEventListener("click", () => handleClick("stone1.png"));
// paper.addEventListener("click", () => handleClick("paper.png"));
// scissor.addEventListener("click", () => handleClick("scissor.png"));

// // Handle Clicks
// function handleClick(choice) {
//     if (count < 1) {
//         alert("Game Over");
//         return;
//     }

//     get_random_image();
//     let userChoiceImage = set_image();
//     userChoiceImage.src = `./images/${choice}`;

//     // scoreCount();
//     count--;
//     countVal.innerHTML = count;
// }


// Score and Counter Elements
let countVal = document.getElementById("count");
let userImage = document.getElementById("userImage");
let cpuImage = document.getElementById("cpuImage");
let ourScore = document.getElementById("ourScore");
ourScore.style.fontSize="15px";
let cpuScores = document.getElementById("cpuScores");
cpuScores.style.fontSize="15px";
let displayScore=document.getElementById("displayScore");
let refree=document.getElementById("refree");

// Game Counters
let countLength = 10;
let count = countLength;
let userCount = 0;
let cpuCount = 0;

// UI Elements
let displaybtn = document.getElementById("displaybtn");
displaybtn.style.padding = "10px";

// Image Buttons (User Choices)
let stone = createImageButton("stn", "./images/stone1.png");
let paper = createImageButton("pap", "./images/paper.png");
let scissor = createImageButton("sciss", "./images/scissor.png");

// Append Buttons to Display
displaybtn.appendChild(stone);
displaybtn.appendChild(paper);
displaybtn.appendChild(scissor);

// Function to Create Image Buttons
function createImageButton(id, src) {
    let img = document.createElement("img");
    img.setAttribute("id", id);
    img.src = src;
    img.style.width = "70px";
    img.style.margin = "20px";
    img.style.cursor = "pointer";
    return img;
}

// User Image Function
function set_image(choice) {
    userImage.innerHTML = ""; // Clear previous image
    let set_imageTag = document.createElement("img");
    set_imageTag.src = `./images/${choice}`;
    set_imageTag.setAttribute("id", "clicked_image");
    userImage.appendChild(set_imageTag);
}

// CPU Random Image Generator
let image_array = ["stone1.png", "paper.png", "scissor.png"];

function get_random_image() {
    cpuImage.innerHTML = ""; // Clear previous image
    let random_index = Math.floor(Math.random() * image_array.length);
    let selected_image = image_array[random_index];

    let imgTag = document.createElement("img");
    imgTag.src = `./images/${selected_image}`;
    imgTag.setAttribute("id", "cpu_choice");
    cpuImage.appendChild(imgTag);

    return selected_image;
}

// Button Click Events
stone.addEventListener("click", () => handleClick("stone1.png"));
paper.addEventListener("click", () => handleClick("paper.png"));
scissor.addEventListener("click", () => handleClick("scissor.png"));

// Handle Clicks
function handleClick(userChoice) {
    if (count <= 1) {
        let scoreBoard =scorePoint();
        showCustomAlert(scoreBoard.innerHTML);         //ALERT BOX CALLING HERE
        return;
    }

    let cpuChoice = get_random_image();
    set_image(userChoice);

    let result = determineWinner(userChoice, cpuChoice);

    // Display Results
    document.getElementById("resultUpdate").innerText = `You chose: ${userChoice.split(".")[0]} | CPU chose: ${cpuChoice.split(".")[0]} | ${result}`;

    // Update Score
    if (result.includes("You Win")) {
        userCount++;
        ourScore.innerText = `Your's Score : ${userCount}`;
    } else if (result.includes("CPU Wins")) {
        cpuCount++;
        cpuScores.innerText = `CPU'S Score : ${cpuCount}`;
    }

    count--;
    countVal.innerText = count;
}

// Function to Compare Choices
function determineWinner(user, cpu) {
    if (user === cpu){
        refree.innerHTML="It's a Tie! 😐";
        // console.log(count);
        return "It's a Tie! 😐";
    }

    if (
        (user === "stone1.png" && cpu === "scissor.png") ||
        (user === "paper.png" && cpu === "stone1.png") ||
        (user === "scissor.png" && cpu === "paper.png")
    ) {
        refree.innerHTML="You Win! 🎉";
        return "You Win! 🎉";
    } else {
        refree.innerHTML="CPU Wins! 😢";
        return "CPU Wins! 😢";
    }
}


// SCORE BOARD
function scorePoint(){
    let scoreBoard=document.createElement("div");
    scoreBoard.setAttribute("id","sb");

    //HEADING
    let heading=document.createElement("h2");
    heading.textContent="Result";
    heading.style.color="white";
    heading.style.marginTop="-30px";


    //inner score div
    let scoreDiv=document.createElement("div");
    scoreDiv.style.display="flex";
    scoreDiv.style.justifyContent="space-between"
    // scoreDiv.style.marginTop="50px";
    // scoreDiv.style.marginBottom="50px";
    scoreDiv.style.margin="50px 0px";

        let userRes=document.createElement("div");  //userscore
        let CPURes=document.createElement("div");   //cpuscore
        userRes.textContent=`User Score : ${userCount}`;
        CPURes.textContent=`CPU score : ${cpuCount}`;

    // Announcement
    let announcement=document.createElement("div");
    announcement.textContent="hi"
    if(userCount==cpuCount){
        announcement.textContent=`It's a Tie! 😐`;
    }else if(userCount>cpuCount){
        announcement.textContent=`You Win! 🎉`;
    }else{
        announcement.textContent=`CPU Wins! 😢`;
    }

    scoreBoard.appendChild(heading);
    scoreBoard.appendChild(scoreDiv);
    scoreDiv.appendChild(userRes);
    scoreDiv.appendChild(CPURes);
    scoreBoard.appendChild(announcement)

    return scoreBoard;
}


function showCustomAlert(message) {
    // Check if an alert box already exists and remove it
    let existingAlert = document.getElementById("customAlert");
    if (existingAlert) {
        existingAlert.remove();
    }

    // Create the alert box
    let alertBox = document.createElement("div");
    alertBox.setAttribute("id", "customAlert");
    alertBox.style.position = "fixed";
    alertBox.style.display = "flex";
    alertBox.style.flexDirection = "column";
    alertBox.style.top = "50%";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translate(-50%, -50%)";
    alertBox.style.width = "250px";
    alertBox.style.padding = "20px";
    alertBox.style.background = "blue";
    alertBox.addEventListener("mouseover",()=>{
        alertBox.style.background="lightgreen"
    })
    alertBox.addEventListener("mouseout",()=>{
        alertBox.style.background="lightblue"
    })
    // alertBox.style.background:hover = "blue";
    alertBox.style.border = "2px solid green";
    alertBox.style.textAlign = "center";
    alertBox.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
    alertBox.style.zIndex = "1000";

    // Add the message
    let messageText = document.createElement("p");   
    messageText.innerHTML = message;
    alertBox.appendChild(messageText);

    // Create the close button
    let closeButton = document.createElement("button");
    closeButton.textContent = "Restart";
    closeButton.style.marginTop = "10px";
    closeButton.style.padding = "10px 15px";
    closeButton.style.border = "none";
    closeButton.style.background = "orange";

    closeButton.addEventListener("mouseover",()=>{       
        closeButton.style.background="green"
    })
    closeButton.addEventListener("mouseout",()=>{
        closeButton.style.background="red"
    })
    closeButton.style.color = "white";
    closeButton.style.cursor = "pointer";
    closeButton.style.borderRadius = "5px";

    // Close the alert when clicking the button
    closeButton.onclick = function () {

        location.reload();      //PAGE RELOAD FUNCTION is "location.reload();"
        alertBox.remove();
    };

    alertBox.appendChild(closeButton);
    document.body.appendChild(alertBox);
}
