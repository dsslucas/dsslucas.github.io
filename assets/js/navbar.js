const navbarData = {
    items: [
        {
            label: null,
            get href() {
                const isEnglish = window.location.pathname.includes('/en');
                return isEnglish
                    ? "https://dsslucas.github.io"
                    : "https://dsslucas.github.io/en";
            },
            get icon() {
                const isEnglish = window.location.pathname.includes('/en');
                return isEnglish
                    ? "assets/img/emoji/br.png"
                    : "assets/img/emoji/us.png";
            }
        },
        {
            label: {
                en: "About",
                pt: "Sobre"
            },
            href: "#about"
        },
        {
            label: {
                en: "Projects",
                pt: "Projetos"
            },
            href: "#projects"
        },
        {
            label: {
                en: "Contact",
                pt: "Contato"
            },
            href: "#contact"
        }
    ]
};

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("#navbar_menu_options ul");

    if (navbar) {
        navbarData.items.forEach((item) => {
            const li = document.createElement("li");
            li.classList.add("nav-item");
        
            const a = document.createElement("a");
            a.classList.add("nav-link");
            a.href = typeof item.href === "function" ? item.href() : item.href;
        
            if (item.label === null && item.icon) {
                const img = document.createElement("img");
                img.src = typeof item.icon === "function" ? item.icon() : item.icon;
                img.alt = "language-switch";
                img.classList.add("flag");
                a.appendChild(img);
            } else {
                const currentLang = window.location.pathname.includes("/en") ? "en" : "pt";
                a.textContent = item.label[currentLang];
            }
        
            li.appendChild(a);
            document.querySelector(".navbar-nav").appendChild(li);
        });        
    }
});