document.addEventListener("DOMContentLoaded", function () {
    const returnSection = document.getElementById("return");
    const nav = document.querySelector('nav');
    const li = document.getElementsByClassName("nav-item");
    const buttonCollapse = document.getElementById("botao-collapse");
    const buttonOptions = document.getElementById('navbarTogglerDemo02')


    // Esconde inicialmente
    returnSection.style.display = "none";

    // Listener no elemento que está realmente rolando
    document.body.addEventListener("scroll", () => {
        console.log("scroll detectado");
        console.log(document.body.scrollTop);

        if (document.body.scrollTop > 0) {
            returnSection.style.display = "flex";
            nav.classList.remove('navbar-dark');
            nav.classList.add('navbar-light')

        } else {
            returnSection.style.display = "none";
            nav.classList.add('navbar-dark');
            nav.classList.remove('navbar-light')
        }
    });

});