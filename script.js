let title=document.querySelectorAll(".title");
let content=document.querySelectorAll(".aboutcontent");

title.forEach((val)=>{
    val.addEventListener("click",()=>{
        content.forEach((vals)=>{
            vals.classList.remove("activecontent");
        })
        if(val.innerHTML=="Education"){
            document.getElementById("Education").classList.add("activecontent")
        }else if(val.innerHTML=="Skills"){
            document.getElementById("Skills").classList.add("activecontent")
        }
    })
})

let closes=document.getElementById("closes");
let opens=document.getElementById("opens");
let menus=document.getElementById("menu");

opens.addEventListener("click",()=>{
    menus.style.right="0px";
})
closes.addEventListener("click",()=>{
        menus.style.right="-170px";
})


let forms=document.getElementById("form");

forms.addEventListener("submit",()=>{
    alert("Message Sent Successfully");
    forms.reset();
})