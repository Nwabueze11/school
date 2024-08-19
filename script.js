var slideImg = document.getElementById("slideImg");

var images = new Array(
    "images/slider-1.jpg",
    "images/slider-2.jpg",
    "images/slider-3.jpg"
);

var count = images.length;
var i = 0;
function slider() {
    if(i > count - 1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()',3000);
}

// 
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

// scroller

const scrolled = document.querySelectorAll('.scrolled');

if(!window.matchMedia("(prefers.reduced-motion: reduce)").matches){
    addAnimation()
}

function addAnimation(){
    scrolled.forEach((scrolled) =>{
        scrolled.setAttribute('data-animation', true)
    });
}