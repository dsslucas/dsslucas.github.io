const presentationData = {
    title: {
        en: "Lucas Souza",
        pt: "Lucas Souza"
    },
    role: {
        en: "Fullstack Developer",
        pt: "Desenvolvedor Fullstack"
    },
    links: [
        {
            icon: "fa-brands fa-linkedin",
            label: "LinkedIn",
            value: "Lucas Souza",
            url: "https://www.linkedin.com/in/lucas-silva-souza/"
        }, {
            icon: "fa-solid fa-envelope",
            label: "Email",
            value: "lucasdasilvasou@gmail.com",
            url: "mailto:lucasdasilvasou@gmail.com"
        }, {
            icon: "fa-brands fa-github",
            label: "Github",
            value: "dsslucas",
            url: "https://github.com/dsslucas"
        }
    ]
}

document.addEventListener("DOMContentLoaded", function () {
    const language = window.location.pathname.includes("en") ? "en" : "pt";

    const headerTitle = document.querySelector("#presentation_info h1");
    if (headerTitle) {
        headerTitle.textContent = presentationData.title[language];
    }

    const presentationRole = document.querySelector("#presentation_info p");
    if (headerTitle) {
        presentationRole.textContent = presentationData.role[language];
    }

    const presentationUl = document.querySelector("#presentation_info ul");
    if (presentationUl) {
        var content = ""
        presentationData.links.forEach((element) => {
            content += `
                 <li>
                    <a href="${element.url}" target="_blank">
                        <i class="fa ${element.icon} fa-1x"></i>
                    </a>
                </li>
            `;
        });

        presentationUl.innerHTML = content;
    }
});