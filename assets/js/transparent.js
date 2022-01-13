//Elementos do Nav
var nav = document.querySelector('nav');
var li = document.getElementsByClassName("nav-item")
var buttonCollapse = document.getElementById("botao-collapse")
const buttonOptions = document.getElementById('navbarTogglerDemo02')

//Botão de retorno à página inicial
var buttonReturn = document.getElementById("return")

window.addEventListener('load', function (){
    console.log("Carreguei!")
    nav.classList.add('navbar-dark')

    buttonReturn.style.display = "none"

    if(window.pageYOffset > 360){
        nav.classList.remove('navbar-dark')
        nav.classList.add('navbar-light')
        buttonReturn.style.display = "inline"
    }

    console.log(window)
})


buttonCollapse.addEventListener("click", function (){
    console.log("Cliquei no botão")
    buttonOptions.style.display = "show"
})

window.addEventListener('scroll', function () {
    console.log("Estou scrollando")

    //Remove o show do Nav
    buttonOptions.classList.remove("show")
    
    //Contempla apenas a página inicial
    if (window.pageYOffset < 550) {
        console.log("Na cor Dark")
        nav.classList.add('navbar-dark');
        nav.classList.remove("navbar-light")
        buttonReturn.style.display = "none"
    }

    else{
        console.log("Saí da página inicial")
        nav.classList.remove("navbar-dark")
        nav.classList.add("navbar-light")
        buttonReturn.style.display = "inline"
    }
});

