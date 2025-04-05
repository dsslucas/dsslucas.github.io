const aboutData = {
    title: {
        en: "About",
        pt: "Sobre"
    },
    buttons: [
        {
            id: "about_experiences",
            label: {
                en: "Experiences",
                pt: "Experiências"
            }
        }, {
            id: "about_education",
            label: {
                en: "Education",
                pt: "Formação"
            }
        }, {
            id: "about_technologies",
            label: {
                en: "Technologies",
                pt: "Tecnologias"
            }
        }, {
            id: "about_publications",
            label: {
                en: "Publications",
                pt: "Publicações"
            }
        }
    ],
    experiences: [
        {
            title: {
                en: "DBFactory Informatica LTDA",
                pt: "DBFactory Informatica LTDA",
            },
            assignment: {
                en: "Fullstack Developer",
                pt: "Desenvolvedor Fullstack"
            },
            location: {
                en: "Pinhais, Paraná, Brazil",
                pt: "Pinhais, Paraná, Brasil"
            },
            workType: {
                en: "Remote",
                pt: "Remoto"
            },
            startDate: new Date("2023-02-02"),
            endDate: null,
            responsabilities: {
                en: [
                    "Support and development of applications for clients in the construction sector in São Paulo, Brazil",
                    "Reconstruction of an internal platform for invoice management using Spring Boot",
                    "Building and maintaining tables, procedures, views, jobs, and triggers in PL/SQL",
                    "Messaging services, real-time graph plotting, and other features through microservices",
                    "Legacy code refactoring",
                    "Application of techniques to reuse code"
                ],
                pt: [
                    "Suporte e desenvolvimento de aplicações para clientes do setor de construção civil na Cidade de São Paulo, Brasil",
                    "Reconstrução de uma plataforma interna para gerenciamento de notas fiscais, em Spring Boot",
                    "Construção e manutenção de tabelas, procedures, views, jobs e triggers, em PL/SQL",
                    "Serviços de mensageria, plotagem de gráficos em tempo real e outros recursos, por meio de microsserviços",
                    "Refatoração de códigos legados",
                    "Aplicação de técnicas para reutilização de código"
                ]
            },
            icon: "briefcase",
            links: [
                {
                    type: "URL",
                    url: "https://www.dbfactory.com.br/"
                }, {
                    type: "LINKEDIN",
                    url: "https://www.linkedin.com/company/dbfactory-informatica-ltda/"
                }
            ],
            technologies: ["Java", "Spring Boot", "HTML5", "CSS3", "JavaScript", "JQuery", "Node.js", "Express.JS", "React.js", "Angular.js", "Wordpress", "PL/SQL", "MongoDB", "Socket.IO"]
        }, {
            title: {
                en: "Zehta Tecnologia e Comunicação",
                pt: "Zehta Tecnologia e Comunicação",
            },
            assignment: {
                en: "Desenvolvedor Frontend",
                pt: "Desenvolvedor Frontend"
            },
            location: {
                en: "Brasilia, Federal District, Brazil",
                pt: "Brasília, Distrito Federal, Brasil"
            },
            workType: {
                en: "Hybrid",
                pt: "Híbrido"
            },
            startDate: new Date("2023-06-02"),
            endDate: new Date("2023-08-02"),
            responsabilities: {
                en: [
                    "Creating a page in React.js to register complaints with the Civil Police of Mato Grosso",
                    "Consumption of data from an external API",
                    "Sending data to the API of the Civil Police of Mato Grosso"
                ],
                pt: [
                    "Criação de uma página em React.js para registro de denúncias na Polícia Civil do Mato Grosso",
                    "Consumo de dados oriundos de API externa",
                    "Envio de dados para a API da Polícia Civil do Mato Grosso"
                ]
            },
            icon: "briefcase",
            links: [],
            technologies: ["HTML5", "CSS3", "React.js", "Ant Design", "Axios"]
        }, {
            title: {
                en: "University of Brasilia",
                pt: "Universidade de Brasília",
            },
            assignment: {
                en: "Researcher",
                pt: "Pesquisador"
            },
            location: {
                en: "Brasilia, Federal District, Brazil",
                pt: "Brasília, Distrito Federal, Brasil"
            },
            workType: {
                en: "Remote",
                pt: "Remote"
            },
            startDate: new Date("2021-08-02"),
            endDate: new Date("2021-12-20"),
            responsabilities: {
                en: [
                    "Participation in a project by the Decision-Making Technologies Laboratory (Latitude) of the University of Brasília, in partnership with the Administrative Council for Economic Defense (CADE)",
                    "Search for articles in the literature on risk management linked to financial fraud",
                    "Development of methodologies for risk mitigation",
                    "Spelling review of documentation",
                    "Studies on types of financial crimes"
                ],
                pt: [
                    "Participação em projeto do Laboratório de Tecnologias da Tomada de Decisão (Latitude) da Universidade de Brasília, em parceria com o Conselho Administrativo de Defesa Econômica (CADE)",
                    "Busca de artigos na literatura sobre gerenciamento de riscos atrelados à fraudes financeiras",
                    "Elaboração de metodologias para mitigação de riscos",
                    "Revisão ortográfica de documentação",
                    "Estudos sobre modalidades de crimes financeiros"
                ]
            },
            icon: "briefcase",
            links: [{
                type: "URL",
                url: "https://unb.br/"
            }, {
                type: "LINKEDIN",
                url: "https://www.linkedin.com/school/universidade-de-bras-lia/"
            }],
            technologies: ["Zotero", "Google Docs", "Overleaf"]
        }, {
            title: {
                en: "University of Brasilia",
                pt: "Universidade de Brasília",
            },
            assignment: {
                en: "Teacher",
                pt: "Professor"
            },
            location: {
                en: "Brasilia, Federal District, Brazil",
                pt: "Brasília, Distrito Federal, Brasil"
            },
            workType: {
                en: "Volunteer",
                pt: "Voluntário"
            },
            startDate: new Date("2020-11-02"),
            endDate: new Date("2021-05-20"),
            responsabilities: {
                en: [
                    "Mandatory completion of 180 hours of classes taught to children aged 8 to 12, enrolled in public schools in the Federal District, as required by the University of Brasília (UnB)",
                    "Teaching Robotics and Introduction to Web Development",
                    "Simulation of practical and intuitive applications, focusing on digital means for better understanding",
                    "Creation of lesson plans",
                    "Application of methodologies for teaching didactics"
                ],
                pt: [
                    "Cumprimento obrigatório de 180 horas de aulas ministradas para crianças de 8 a 12 anos, matriculadas em escolas públicas do Distrito Federal, conforme exigência da Universidade de Brasília (UnB)",
                    "Regência sobre Robótica e Introdução ao Desenvolvimento Web",
                    "Simulação de aplicações práticas e intuitivas, focando em meios digitais para maior compreensão",
                    "Criação de planos de aula",
                    "Aplicação de metodologias para didática"
                ]
            },
            icon: "chalkboard-user",
            links: [{
                type: "URL",
                url: "https://www.educacao.df.gov.br/"
            }, {
                type: "LINKEDIN",
                url: "https://www.linkedin.com/company/secretaria-de-estado-de-educa%C3%A7%C3%A3o-do-distrito-federal/"
            }],
            technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Google Classroom", "Arduino"]
        }, {
            title: {
                en: "School of the Nations",
                pt: "Escola das Nações",
            },
            assignment: {
                en: "Intern",
                pt: "Estagiário"
            },
            location: {
                en: "Lago Sul, Federal District, Brazil",
                pt: "Lago Sul, Distrito Federal, Brasil"
            },
            workType: {
                en: "Half Time",
                pt: "Meio Período"
            },
            startDate: new Date("2017-07-09"),
            endDate: new Date("2019-06-20"),
            responsabilities: {
                en: [
                    "Technical support for users of various countries",
                    "Hardware maintenance",
                    "Partial management of network infrastructure, Active Directory (AD) and firewall",
                    "Internal documentation",
                    "Equipment borrow control to employees"
                ],
                pt: [
                    "Suporte técnico a usuários de diversas nacionalidades",
                    "Manutenção de hardware",
                    "Gerenciamento parcial da infraestrutura de rede, Active Directory (AD) e firewall",
                    "Elaboração de documentações internas",
                    "Controle de equipamentos emprestados a funcionários"
                ]
            },
            icon: "briefcase",
            links: [{
                type: "URL",
                url: "https://www.schoolofthenations.com.br/"
            }, {
                type: "LINKEDIN",
                url: "https://www.linkedin.com/company/school-of-the-nations/"
            }],
            technologies: ["Help Desk", "Google Docs", "Google Sheets"]
        }
    ],
    education: [
        {
            title: {
                en: "Degree in Computing",
                pt: "Licenciatura em Computação",
            },
            assignment: {
                en: "Graduation",
                pt: "Graduação"
            },
            location: {
                en: "University of Brasilia (UnB)",
                pt: "Universidade de Brasília (UnB)"
            },
            responsabilities: {
                en: [
                    "Studies about data structure, programming techniques and database management",
                    "Applications development",
                    "Revision about educational methodologies",
                    "Preparation of complex calculations"
                ],
                pt: [
                    "Estudos sobre estrutura de dados, técnicas de programação e gerenciamento de banco de dados",
                    "Desenvolvimento de aplicações",
                    "Revisão sobre metodologias educacionais",
                    "Elaboração de cálculos complexos"
                ]
            },
            startDate: new Date("2016-03-08"),
            endDate: new Date("2022-06-20"),
            icon: "graduation-cap",
            technologies: ["C", "Python", "Java", "Go", "Haskell", "MySQL"]
        }
    ],
    technologies: [
        {
            title: {
                en: "Frontend",
                pt: "Front-end"
            },
            icon: "laptop-code",
            technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Angular.js", "JQuery", "Wordpress", "Bootstrap", "Ant Design"]
        }, {
            title: {
                en: "Backend",
                pt: "Back-end"
            },
            icon: "code",
            technologies: ["Java", "Spring Boot", "Node.js", "Express.js", "Python", "Go", "C", "Socket.IO"]
        }, {
            title: {
                en: "Database",
                pt: "Banco de Dados"
            },
            icon: "database",
            technologies: ["SQL", "PostgreSQL", "PL/SQL", "MongoDB"],
        }, {
            title: {
                en: "Test",
                pt: "Testes"
            },
            icon: "check",
            technologies: ["Cucumber", "JUnit", "Selenium"]
        }, {
            title: {
                en: "Other",
                pt: "Outros"
            },
            icon: "window-restore",
            technologies: ["Arduino", "Google Classroom", "Google Docs", "Google Sheets", "Overleaf", "Zotero"]
        }
    ],
    publications: [
        {
            title: {
                en: "Requirements Engineering Processes in the Context of IoT and Requirements Validation Techniques",
                pt: "Requirements Engineering Processes in the Context of IoT and Requirements Validation Techniques"
            },
            text: {
                en: [
                    "Article presented at WER 2022, based on the Course Completion Work (TCC on Brazil) that I carried out in partnership with Felipe Ayres and guided by Dr. Prof. Edna Dias Canedo, presented on August 9, 2021 at the University of Brasília (UnB)",
                    "The article consists of a study in the literature on the processes and techniques of Requirements Engineering aimed at data validation in the context of the Internet of Things (IoT). Based on this, the IoT-Guide was proposed, with the aim of guiding academic and professional projects that adopt IoT and that need to legitimize these data"
                ],
                pt: [
                    "Artigo apresentado no WER 2022, baseado no Trabalho de Conclusão de Curso (TCC) que realizei com parceria de Felipe Ayres e orientado pela Dra. Prof. Edna Dias Canedo, apresentado em 09 de Agosto de 2021 na Universidade de Brasília (UnB)",
                    "O artigo consiste de um estudo na literatura sobre os processos e técnicas da Engenharia de Requisitos voltadas para a validação de dados no contexto de Internet das Coisas (IoT). Com base nisto, foi proposto o IoT-Guide, com o intuito de nortear projetos acadêmicos e profissionais que adotem IoT e que necessitam de uma legitimação destes dados"
                ]
            },
            buttons: [{
                label: {
                    en: "Article",
                    pt: "Artigo"
                },
                url: "http://wer.inf.puc-rio.br/WERpapers/artigos/artigos_WER22/WER_2022_Camera_ready_paper_31.pdf"
            }, {
                label: {
                    en: "Thesis",
                    pt: "TCC"
                },
                url: "https://bdm.unb.br/handle/10483/29066"
            },
            {
                label: {
                    en: "Guide",
                    pt: "Guia"
                },
                url: "https://dsslucas.github.io/iot-guide/sobre"
            }],
            icon: "file"
        }
    ]
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("renderizei");

    const language = window.location.pathname.includes("en") ? "en" : "pt";

    console.log(language);

    // Render Title
    const headerTitle = document.querySelector("#about .headerSection h2");
    if (headerTitle) {
        headerTitle.textContent = aboutData.title[language];
    }

    renderAboutButtons(language);

    renderAboutContent();

    console.log(aboutData)
});

function renderAboutButtons(language) {
    const aboutContentButtons = document.getElementById("about_content_buttons");

    if (Array.isArray(aboutData.buttons)) {
        var buttons = "";

        aboutData.buttons.forEach((element) => {
            console.log(element)
            buttons += `
                <button id="${element.id}">
                    ${element.label[language]}
                </button>
            `;
        });

        aboutContentButtons.innerHTML = buttons;
    }    
}

function renderAboutContent(type, language) {
    const aboutContentSection = document.getElementById("about_content_details");

    aboutContentSection.innerHTML = `
        <article>
            <span class="about_content_indicator">
                <i class="fa fa-solid fa-briefcase"></i>
            </span>
            <div class="about_content_info">
                <header>
                    <div class="about_content_info_header_principal">
                        <h5>DBFactory Informatica LTDA</h5>
                        <h6 class="role">Desenvolvedor Fullstack</h6>
                        <small class="period">02/2023 até o momento — 1 ano e 2
                            meses</small>
                        <span class="">Remoto</span>
                        <!-- <span class="badge bg-info">Voluntário</span> -->
                    </div>
                    <div class="about_content_info_header_links">
                        <a href="https://github.com/eztec" target="_blank"
                            class="btn btn-sm btn-outline-secondary" title="GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.eztec.com.br" target="_blank"
                            class="btn btn-sm btn-outline-secondary" title="Website">
                            <i class="fa-solid fa-globe"></i>
                        </a>
                        <a href="mailto:contato@eztec.com.br" class="btn btn-sm btn-outline-secondary"
                            title="Email">
                            <i class="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                </header>
                <section>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatibus
                            dicta ea! Reiciendis eum at molestiae vel debitis. At, eaque! Aliquam
                            delectus dolores quasi nulla quis eligendi cumque. Laboriosam, iste.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum praesentium
                            tempora quas quisquam laudantium atque consequuntur, perspiciatis, libero
                            quidem aliquam ipsum minima, minus debitis expedita velit natus inventore
                            ipsam dolores?</li>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero beatae aut
                            obcaecati, a accusantium numquam doloribus alias, similique distinctio
                            debitis vel, nihil cumque quis quas aliquam. Dolores, harum deleniti. Fugit.
                        </li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
                            voluptatum repellat sint aperiam sed nobis vero reiciendis natus, alias
                            similique explicabo laboriosam est enim nostrum necessitatibus commodi,
                            porro eligendi rem!</li>
                    </ul>
                </section>
                <footer>
                    <div class="professional_skill">
                        <span class="professional_skill_span">React.js</span><span
                            class="professional_skill_span">Node.js</span><span
                            class="professional_skill_span">Angular.js</span><span
                            class="professional_skill_span">Java</span><span
                            class="professional_skill_span">Ant
                            Design</span><span class="professional_skill_span"> Wordpress</span><span
                            class="professional_skill_span">Bootstrap</span><span
                            class="professional_skill_span">TailwindCSS</span><span
                            class="professional_skill_span">Bulma.io</span><span
                            class="professional_skill_span">SQL</span><span
                            class="professional_skill_span">PL/SQL</span>
                    </div>
                </footer>
        </article>
    `;
}