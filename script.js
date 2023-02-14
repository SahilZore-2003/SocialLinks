let hide = document.querySelectorAll('.hide');
let message = document.querySelector('#message');
let times = document.querySelector('#times');
let show = ()=>{
    hide.forEach((showing)=>{
        showing.style.display = "block";
        message.style.display = "none"
    })
}

times.addEventListener('click',()=>{
    hide.forEach((showing)=>{
        showing.style.display = "none";
        message.style.display = "block"
    })
})

let youtube = ()=>{
    alert("sorry we dont have youtube channel!!")
}