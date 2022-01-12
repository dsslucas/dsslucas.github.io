//Elementos do Nav
var nav = document.querySelector('nav');
var li = document.getElementsByClassName("nav-item")
var buttonCollapse = document.getElementById("botao-collapse")
const buttonOptions = document.getElementById('navbarTogglerDemo02')

// Elementos do Presentation
var h1 = document.getElementById("h1-presentation")
var p = document.getElementById("p-presentation")
var a = document.getElementById("presentation").getElementsByTagName("a")

//Botão de retorno à página inicial
var buttonReturn = document.getElementById("return")

window.addEventListener('load', function (){
    console.log("Carreguei!")
    //nav.classList.add('navbar-light')
    nav.classList.add('navbar-dark')
    h1.style.color = "white"
    p.style.color = "white"

    buttonReturn.style.display = "none"


    for(let i=0; i< a.length; i++){
        a[i].style.color = "white"
    }

    console.log(window)
})

buttonCollapse.addEventListener("click", function (){
    console.log("Cliquei no botão")
    buttonOptions.style.display = "show"
})

window.addEventListener('scroll', function () {
    //Contempla apenas a página inicial
    console.log(window.pageYOffset)
    if (window.pageYOffset <= 700) {
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
    /*
    else if(window.pageYOffset > 700){
        console.log("Saí da página inicial")
        nav.classList.remove("navbar-dark")
        nav.classList.add("navbar-light")
    }
    else {
        console.log("Transparente")
        nav.classList.remove('bg-light', 'shadow');
        //nav.classList.add('navbar-light')
        buttonOptions.classList.remove('show')
    }
    */
});
