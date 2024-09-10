let dayNight = document.querySelector(".dayNight")
let banner = document.querySelector(".banner")

dayNight.addEventListener("click",()=>{
  banner.classList.toggle("night");
})
// let typingEffect = new Typed("#text",
//   {
//     Strings:["Web Developer"],
//     loop:true,
//     typedSpeed:100,
//     backSpeed:50,
//     backDelay:1000
//   }
// )