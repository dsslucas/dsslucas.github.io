document.addEventListener("DOMContentLoaded", function () {
    const returnSection = document.getElementById("return");
    const nav = document.querySelector('nav');

    // Esconde inicialmente
    returnSection.style.display = "none";

    let isVisible = false;

    document.body.addEventListener("scroll", () => {
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

    // Aguarda a animação terminar antes de ocultar
    returnSection.addEventListener("animationend", (event) => {
        if (event.animationName === "fadeOut") {
            returnSection.style.display = "none";
        }
    });
});
