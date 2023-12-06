//! ======= Scroll top button ======= 
const scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll', checkHeight)
  function checkHeight(){
    if(window.scrollY > 50) {
      scrollTop.style.opacity =  .5;
    } else {
      scrollTop.style.opacity = 0;
    }
  }
scrollTop.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
})
// ! ========navbar========
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-66px";
  }
  prevScrollpos = currentScrollPos;
}
// ! ========preloading===========
const preloader = document.getElementById("preloader");
if (preloader) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('loaded');
    }, 1000);
    setTimeout(() => {
      preloader.remove();
    }, 1000);
  });
}
