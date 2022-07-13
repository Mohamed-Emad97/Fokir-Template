//Global Variablies
const header = document.querySelector("header");
//Inputs Variblies
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const sendBtn = document.querySelector("#send");
//Warring Variblies
const nameWarring = document.querySelector("#name-error");
const emailWarring = document.querySelector("#email-error");
const subjWarring = document.querySelector("#subj-error");
const msgWarring = document.querySelector("#msg-error");
const warring = document.querySelectorAll(".warring");
//RegEx Variblies
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const nameRegex = /^[A-Z][-a-zA-Z]+$/;

let lastScroll = window.scrollY;

//Program Events
//Header Events
window.addEventListener("scroll",function(){
  if(lastScroll < window.scrollY){
      header.classList.add("black");
      header.classList.remove("transparent");
  }else {
    header.classList.remove("black");
    header.classList.add("transparent");
  }
});
$(".nav-link").click(function(){
  let currentHref = $(this).attr("href");
  let currentOffSet = $(currentHref).offset().top;
  $(window).animate({scrollTop: currentOffSet},2000);
})
//Contacts Form Events 
nameInput.addEventListener("keyup", ()=>{
  let nameTxt = nameInput.value;
  if(nameRegex.test(nameTxt)){
    nameWarring.classList.add("d-none");
    nameWarring.classList.remove("d-block");
  }else {
    nameWarring.classList.add("d-block");
    nameWarring.classList.remove("d-none");
  }
});
email.addEventListener("keyup", ()=>{
  let emailTxt = email.value;
  if(emailRegex.test(emailTxt)){
    emailWarring.classList.add("d-none");
    emailWarring.classList.remove("d-block");
  }else {
    emailWarring.classList.add("d-block");
    emailWarring.classList.remove("d-none");
  }
});
message.addEventListener("keyup", function(e){
  let messageCount = message.value;
  let messageLength = messageCount.length;
  let maxValue = 200;
  let typedChar = maxValue - messageLength;
  console.log(typedChar);
  if (typedChar == 0){
      message.setAttribute("readonly","true");
      msgWarring.classList.add("d-block");
      msgWarring.classList.remove("d-none");
      msgWarring.innerHTML = `you reached available character for Message`;
  }else {
    msgWarring.classList.add("d-none");
    msgWarring.classList.remove("d-block");
  }
});
sendBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  if(nameInput.value == "" && email.value == "" && subject.value == "" && message.value == ""){
    for(let i = 0; i < warring.length; i++){
      warring[i].classList.add("d-block");
      warring[i].classList.remove("d-none");
    }
  }else {
    for(let i = 0; i < warring.length; i++){
      warring[i].classList.add("d-none");
      warring[i].classList.remove("d-block");
    }
  }
})
//Program Functions
//Fire Function Of Owl.JS
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      items: 1,
      center: true,
      loop: true,
    });
  });
//Fire Function Of Typed.js
var typed = new Typed('.element', {
  strings: ["Designer.", "Developer."],
  typeSpeed: 130,
  loop: true,
  backSpeed: 80,
  backDelay: 70,
});
