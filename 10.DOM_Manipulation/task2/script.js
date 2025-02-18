let btn=document.createElement("button");
btn.setAttribute("id","btn");
btn.textContent="JS Image"
document.body.append(btn);

btn.addEventListener("click",()=>{
    let imgs=document.createElement("img");
    imgs.src="js_logo.jpg";
    document.body.appendChild(imgs);
})
