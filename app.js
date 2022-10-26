const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

//display mobile menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};
menu.AddEventListener('click',mobileMenu);
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//show active menu which scroling js

const highlightMenu = () => {
    const elem = document.queryselector('.highlight')
    const homeMenu = document.queryselector('#home-page')
    const aboutMenu = document.queryselector('#about-page')
    const servicesMenu = document.queryselector('#services-page')
    let scrolpas = window.scrolly
    
    //console.log(scrollpas);

    //adds 'hightlight' class to my menu items scroll webside

    if(window.innerwidth > 960 && scrollpos < 600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return;
    }
    
    else if (window.innerwidth > 960 && scrollpos < 1400){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        aboutMenu.classList.remove('highlight')
        return;
    }
        else if (window.innerwidth > 960 && scrollpos < 2345){
            homeMenu.classList.add('highlight')
            aboutMenu.classList.remove('highlight')
            return;
    }

    if (elem && window.innerwidth <960 && scrollpos < 600) { 
        elem.classList.remove('highlight')
    }
};

window.addEventListener('scroll',highlightMenu);
window.addEventListener('click',highlightMenu);

//close mobile Menu whith clicking on a Menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if (window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click',hideMobileMenu);
navLogo0.addEventListener('click',hideMobileMenu);
