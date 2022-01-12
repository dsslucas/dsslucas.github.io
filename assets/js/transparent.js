
var nav = document.querySelector('nav');
var li = document.getElementsByClassName("nav-item")

var buttonCollapse = document.getElementById("botao-collapse")

const buttonOptions = document.getElementById('navbarTogglerDemo02')

window.addEventListener('load', function (){
    console.log("Carreguei!")
    nav.classList.add('navbar-light');
})

buttonCollapse.addEventListener("click", function (){
    console.log("Cliquei no botão")
    buttonOptions.style.display = "show"
})

window.addEventListener('scroll', function () {
    if (window.pageYOffset < -2) {
        console.log("Na cor Light")
        nav.classList.add('bg-light', 'shadow', 'navbar-light');
    } else {
        console.log("Transparente")
        nav.classList.remove('bg-light', 'shadow');
        //nav.classList.add('navbar-light')
        buttonOptions.classList.remove('show')
    }
});
