const wrapperSkills = document.getElementById("skills_wrapper");

const skills = {
    frontend: {
        title: {
            pt_BR: "Frontend",
            en_US: "Frontend"
        },
        values: ["HTML5", "CSS3", "React.js", "Angular.js", "Next.js", "React Native", "Bootstrap", "Ant Design", "TailwindCSS", "Bulma.io", "Wordpress"]
    },
    backend: {
        title: {
            pt_BR: "Backend",
            en_US: "Backend"
        },
        values: ["Node.js", "Java", "Spring Boot", "Python", "Go", "C"]
    },
    database: {
        title: {
            pt_BR: "Bancos de Dados",
            en_US: "Databases"
        },
        values: ["PostgreSQL", "MySQL", "Supabase", "MongoDB", "PL/SQL"]
    },
    tests: {
        title: {
            pt_BR: "Testes",
            en_US: "Tests"
        },
        values: ["JUnit", "Cucumber", "Selenium"]
    },
    others: {
        title: {
            pt_BR: "Outros",
            en_US: "Others"
        },
        values: ["Git", "Google Sheets", "Google Docs"]
    }
}

function renderSkills(language) {
    var body = "";
    var skillsNames = "";

    for (const [key, value] of Object.entries(skills)) {
        skillsNames = "";

        if(value.values.length > 0) {
            value.values.forEach((item) => {
                skillsNames += `<span class="span_professional_skills">${item}</span>`;
            })
        }

        body += `
            <div class="row">
                <h6>${value["title"][language]}</h6>
                <div class="professional_skills_wrapper">
                    ${skillsNames}
                </div>
            </div>
        `;
    }

    wrapperSkills.innerHTML = body;
}
