window.addEventListener("scroll", function(){
    const nav = document.querySelector(".navbar");
    nav.classList.toggle('navmenu', window.scrollY > 0)
})