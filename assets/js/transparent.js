//Elementos do Nav
var nav = document.querySelector('nav');
var li = document.getElementsByClassName("nav-item")
var buttonCollapse = document.getElementById("botao-collapse")
const buttonOptions = document.getElementById('navbarTogglerDemo02')
const testMobile = document.getElementById('list-mobile')

//Botão de retorno à página inicial
var buttonReturn = document.getElementById("return")

window.addEventListener('load', function () {
    nav.classList.add('navbar-dark')

    buttonReturn.style.display = "none"

    if (window.pageYOffset > 360) {
        nav.classList.remove('navbar-dark')
        nav.classList.add('navbar-light')
        buttonReturn.style.display = "inline"
    }
})

buttonCollapse.addEventListener("click", function () {
    buttonOptions.style.display = "show"
    if (window.pageYOffset < 520) {
        nav.classList.add('bg-dark')
    }
    else {
        nav.classList.add('bg-light')
    }

    if (buttonCollapse.classList.contains('collapsed')) {

        buttonOptions.classList.add('collapsing')
        //Remove o fundo, que é criado quando há o clique no Nav
        nav.classList.remove('bg-light')
        nav.classList.remove('bg-dark')
    }
})

window.addEventListener('scroll', function () {

        //Remove o fundo, que é criado quando há o clique no Nav
        nav.classList.remove('bg-light')
        nav.classList.remove('bg-dark')

    //Remove o show do Nav
    buttonCollapse.classList.add('collapsed')
    buttonCollapse.ariaExpanded = false
    buttonOptions.classList.remove("show")

    //Contempla apenas a página inicial
    if (window.pageYOffset < 520) {
        nav.classList.add('navbar-dark');
        nav.classList.remove("navbar-light")
        buttonReturn.style.display = "none"
    }

    else {
        nav.classList.remove("navbar-dark")
        nav.classList.add("navbar-light")
        buttonReturn.style.display = "inline"
    }
});

