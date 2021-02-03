
let bg = document.querySelector('body');

console.log(bg)

let navbar = document.getElementById('navBar')



window.addEventListener('scroll', ()=> {
    var scrolled = window.scrollY;
    if (scrolled > 500 ){
        navBar.classList.add("header-container-scroll")
        navBar.classList.remove("header-container")
    }else{
        navBar.classList.remove("header-container-scroll")
        navBar.classList.add("header-container")
    }
})