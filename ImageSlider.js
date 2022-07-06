const slides=document.querySelectorAll(".slide");
const prev=document.querySelector("#prev");
const next =document.querySelector("#next");
let auto=true;
const interval=3000;
const nextSlide=()=>{
    const active=document.querySelector(".active");
    active.classList.remove("active");
    if(active.nextElementSibling){
        active.nextElementSibling.classList.add("active");
    }
    else{
        slides[0].classList.add("active");
    }
}
const prevSlide=()=>{
    const active=document.querySelector(".active");
    active.classList.remove("active");
    if(active.previousElementSibling){
        active.previousElementSibling.classList.add("active");
    }
    else{
        slides[slides.length-1].classList.add("active");
    }
}
prev.addEventListener("click",prevSlide);
next.addEventListener("click",nextSlide)
if(auto){
    setInterval(nextSlide,interval);
}