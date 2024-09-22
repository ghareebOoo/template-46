// let lastScroll = 0;
// window.addEventListener("scroll", function() {
//     let currentScroll = window.scrollY;
//     let header = document.querySelector("header");
//     if (currentScroll > lastScroll) { 
//         header.classList.add("scrolled");
//     } else {
//         header.classList.remove("scrolled");
//     }
//     lastScroll = currentScroll;
// });




window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 607) { 
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


var options = {
    strings: ["Developer", "Designer", "Larry Daniels"],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    startDelay: 500,
    loop: true
};
  
var typed = new Typed("#typed-output", options);