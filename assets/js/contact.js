const contactData = {
    title: {
        en: "Contact",
        pt: "Contato"
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
};

document.addEventListener("DOMContentLoaded", function () {
    const language = window.location.pathname.includes("en") ? "en" : "pt";

    const headerTitle = document.querySelector("#contact .headerSection h2");
    if (headerTitle) {
        headerTitle.textContent = contactData.title[language];
    }

    const contactList = document.getElementById("contact_content");

    contactData.links.forEach(link => {
        const wrapper = document.createElement("div");
        wrapper.className = "contact_item";

        wrapper.innerHTML = `
          <div class="contact_info">
            <i class="fa ${link.icon} text-secondary"></i>
            <div class="contact_info_profile">
                <span style="font-weight: 700">${link.label}</span>
                <span>${link.value}</span>
            </div>            
          </div>
          <div style="display: flex; gap: 0.5rem">
            <button class="redirectContactButtonClicked redirectButton" url="${link.url}">
              <i class="fa fa-solid fa-copy"></i>
            </button>
            <a href="${link.url}" target="_blank" class="redirectButton">
              <i class="fa fa-solid fa-arrow-right"></i>
            </a>
          </div>
        `;

        contactList.appendChild(wrapper);
    });

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text);
    }

    document.addEventListener("click", function (event) {
        const button = event.target.closest(".redirectContactButtonClicked");
        if (button) {
            const value = button.getAttribute("url");
            if (value) {
                copyToClipboard(value);
            }
        }
    });
})