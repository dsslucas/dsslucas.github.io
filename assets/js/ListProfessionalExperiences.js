const wrapper = document.getElementById("list_professional_experiences_wrapper");

const experiences_pt = [
    {
        title: "Desenvolvedor Fullstack",
        time: "Fev/2023 a atualmente",
        company: "DBFactory Informática LTDA",
        description: "Criação e manutenção de softwares web",
        skills: ["React.js", "Node.js", "Angular.js", "Java", "Ant Design", " Wordpress", "Bootstrap", "TailwindCSS", "Bulma.io", "SQL"]
    },
    {
        title: "Desenvolvedor Frontend",
        time: "Jun/2022 a Ago/2022",
        company: "Zehta Tecnologia e Comunicação",
        description: "Construção de páginas.",
        skills: ["React.js", "Axios", "Integração", "Ant Design"]
    },
    {
        title: "Pesquisador",
        time: "Ago/2021 a Dez/2021",
        company: "Universidade de Brasília (UnB)",
        description: "Projeto de pesquisa entre a UnB e o Conselho Administrativo de Defesa Econômica (CADE).",
        skills: ["Zotero", "Google Docs", "Overleaf"]
    },
    {
        title: "Professor",
        time: "Nov/2020 a Mai/2021",
        company: "Secretaria de Estado de Educação do Distrito Federal (SEEDF)",
        description: "Regência prevista no currículo do curso de Licenciatura em Computação pela UnB, com carga horária total de 180 horas.",
        skills: ["Google Classroom", "Google Docs", "Google Sheets"]
    },
    {
        title: "Estagiário",
        time: "Jul/2017 a Jun/2019",
        company: "Escola das Nações",
        description: "Suporte ao usuário por plataformas Help Desk.",
        skills: ["Help Desk", "Google Docs", "Google Sheets"]
    }
]

const experiences_en = [
    {
        title: "Fullstack Developer",
        time: "Feb/2023 until now",
        company: "DBFactory Informática LTDA",
        description: "Creating and maintaining web software",
        skills: ["React.js", "Node.js", "Angular.js", "Java", "Ant Design", " Wordpress", "Bootstrap", "TailwindCSS", "Bulma.io", "SQL"]
    },
    {
        title: "Frontend Developer",
        time: "Jun/2022 to Aug/2022",
        company: "Zehta Tecnologia e Comunicação",
        description: "Development using React.js and integration with backend services.",
        skills: ["React.js", "Axios", "Integração", "Ant Design"]
    },
    {
        title: "Researcher",
        time: "Aug/2021 to Dec/2021",
        company: "University of Brasilia (UnB)",
        description: "Research project between UnB and the Administrative Council for Economic Defense (CADE).",
        skills: ["Zotero", "Google Docs", "Overleaf"]
    },
    {
        title: "Teacher",
        time: "Nov/2020 to May/2021",
        company: "State Department of Education of Federal District (SEEDF)",
        description: "Regency provided in the curriculum of the Degree in Computing on UnB, with a total workload of 180 hours.",
        skills: ["Google Classroom", "Google Docs", "Google Sheets"]
    },
    {
        title: "Intern",
        time: "Jul/2017 to Jun/2019",
        company: "School of the Nations",
        description: "User support by Help Desk platforms.",
        skills: ["Help Desk", "Google Docs", "Google Sheets"]
    }
]

function renderizeProfessionalExperiences(data) {
    var body = "";
    var skills = "";

    data.forEach((element) => {
        skills = ""

        if (element.skills.length > 0) {
            element.skills.forEach((item) => {
                skills += `<span class="span_professional_skills">${item}</span>`;
            })
        }

        body += `
            <div class="row">
                <h6 style="margin-bottom: 0;">${element.title} - ${element.time}</h6>
                <p>${element.company}</p>
                <p>${element.description}</p>
                <div class="professional_skills_wrapper">
                    ${skills}
                </div>
            </div>
        `;

        //wrapper.innerHTML = body;
    })
    wrapper.innerHTML = body;
}

function renderProfessionalExperiences(language) {
    if (language === "pt_BR") renderizeProfessionalExperiences(experiences_pt)
    else if (language === "en_US") renderizeProfessionalExperiences(experiences_en)
}