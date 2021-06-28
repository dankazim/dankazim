/* show nav-menu */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav-link');

function navigateLink(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', navigateLink))


/* change background on scrool */

function headerScroll(){
    const header = document.getElementById('header');
    if(this.scrollY >100){
        header.classList.add('scroll-header');
    }else{
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', headerScroll);
