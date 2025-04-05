document.addEventListener("DOMContentLoaded", function () {
    const returnSection = document.getElementById("return");
    const nav = document.querySelector('nav');
    const buttonCollapse = document.getElementById("botao-collapse");
    const buttonOptions = document.getElementById('navbar_menu_options');

    // Esconde inicialmente
    returnSection.style.display = "none";
    nav.classList.add('navbar-dark');

    let isVisible = false;

    document.body.addEventListener("scroll", () => {
        nav.classList.remove('bg-light');
        nav.classList.remove('bg-dark');

        buttonCollapse.classList.add('collapsed');
        buttonCollapse.ariaExpanded = false;
        buttonOptions.classList.remove("show");

        const scrolled = document.body.scrollTop || document.documentElement.scrollTop;

        if (scrolled > 0 && !isVisible) {
            isVisible = true;
            returnSection.style.display = "flex";
            returnSection.classList.remove("fadeOut");
            returnSection.classList.add("fadeIn");

            nav.classList.remove('navbar-dark');
            nav.classList.add('navbar-light');
        }

        if (scrolled === 0 && isVisible) {
            isVisible = false;
            returnSection.classList.remove("fadeIn");
            returnSection.classList.add("fadeOut");

            nav.classList.add('navbar-dark');
            nav.classList.remove('navbar-light');
        }
    });

    returnSection.addEventListener("animationend", (event) => {
        if (event.animationName === "fadeOut") {
            returnSection.style.display = "none";
        }
    });

    buttonCollapse.addEventListener("click", () => {
        const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
        console.log("SCROLL: ", scrolled)
        if (scrolled > 0) {
            nav.classList.remove('bg-dark');
            nav.classList.add('bg-light');
        }

        if (scrolled === 0) {
            nav.classList.remove('bg-dark');
            nav.classList.remove('bg-light');
        }

        if (buttonCollapse.classList.contains('collapsed')) {
            buttonOptions.classList.add('collapsing');
            nav.classList.remove('bg-light');
            nav.classList.remove('bg-dark');
        }
    });
});
