const img_projeto_locacao_v2 = "assets/img/project/projeto_locacao_v2.png";
const img_marama = "assets/img/project/marama.png";
//import * as img_marama from 'assets/img/project/marama.png';
const img_todo = "assets/img/project/task-reactnative.jpg";
const img_mks = "assets/img/project/mks.png";
const img_codeleap = "assets/img/project/CodeLeap.png";
const img_rocketseat = "assets/img/project/estudo-react-rocketseat.png";
const img_to_do = "assets/img/project/to-do.png";
const img_contador_gasto = "assets/img/project/controle-gastos.png";
const img_projeto_alura = "assets/img/project/projeto_alura.png";
const img_projeto_locacao_v1 = "assets/img/project/rent-management.png";
const img_portfolio_edna = "assets/img/project/portfolio-edna.png";
const img_iot_guide = "assets/img/project/iot-guide-full.png";
const img_controle_gastos = "assets/img/project/controle-gastos-2.0.png";
const img_backend_project = "assets/img/project/backend.jpg";
const img_goledger = "assets/img/project/goledger.png";
const img_b7 = "assets/img/project/challenge-b7.png";

const projectsData = {
    title: {
        en: "Projects",
        pt: "Projetos"
    },
    searchInput: {
        en: "Type some used resource...",
        pt: "Digite um recurso utilizado..."
    },
    projects: [
        {
            title: {
                en: "Practical Test - Meetime",
                pt: "Teste Prático - Meetime"
            },
            description: {
                pt: "Aplicação backend integrada aos serviços de login e contato do HubSpot.",
                en: "Backend application integrated within HubSpot login and contact services."
            },
            technologies: ["Java", "Spring Boot", "HubSpot", "OAuth2"],
            thumbnail: img_backend_project,
            links: [
                {
                    type: "Github",
                    url: "https://github.com/dsslucas/auth-test-meetime"
                }
            ]
        }, {
            title: {
                pt: "Desafio Fullstack - B7",
                en: "Fullstack Challenge - B7"
            },
            description: {
                pt: "Registro de produtos, suas categorias e usuários.",
                en: "Register of products, their categories and users."
            },
            technologies: ["React.js", "Java", "Spring Boot", "PostgreSQL", "MaterialUI", "JUnit"],
            thumbnail: img_b7,
            links: [
                {
                    type: "Github",
                    url: "https://github.com/dsslucas/project-b7-backend"
                },
                {
                    type: "Github",
                    url: "https://github.com/dsslucas/project-b7-frontend"
                }
            ]
        }, {
            title: {
                pt: "Desafio - GoLedger",
                en: "Challenge - GoLedger"
            },
            description: {
                pt: "Registro de artistas, álbuns, músicas e playlists em blockchain.",
                en: "Register of artist, albums, songs and playlists in blockchain application."
            },
            technologies: ["React.js", "Node.js", "Blockchain", "TailwindCSS"],
            thumbnail: img_goledger,
            links: [
                {
                    type: "Github",
                    url: "https://github.com/dsslucas/goledger-challenge-web"
                }
            ]
        }, {
            title: {
                pt: "Imersão Backend Node.js - Alura",
                en: "Backend Immersion Node.js - Alura"
            },
            description: {
                pt: "Requisições CRUD utilizando Node.js, MongoDB e Gemini.",
                en: "CRUD requests using Node.js, MongoDB and Gemini."
            },
            technologies: ["Node.js", "MongoDB", "Gemini"],
            thumbnail: img_backend_project,
            links: [
                {
                    type: "Github",
                    url: "https://github.com/dsslucas/curso-backend-gemini-alura"
                }
            ]
        }, {
            title: {
                pt: "Projeto de Controle de Gastos V2.0",
                en: "Expense Control Project V2.0"
            },
            description: {
                pt: "Registro e catalogação de gastos por categoria.",
                en: "Register and show payments by category and payment method."
            },
            technologies: ["React.js", "Node.js", "PostgreSQL", "TailwindCSS"],
            thumbnail: img_controle_gastos,
            links: [
                {
                    type: "Github",
                    url: "https://github.com/dsslucas/projeto-controle-gastos"
                }
            ]
        }, {
            title: {
                pt: "Controle de monitoria (Backend)",
                en: "Monitoring Control (Backend)",
            },
            description: {
                pt: "Projeto para gerenciamento de monitorias, havendo registro de usuário, aulas e horários.",
                en: "Project for monitoring management, with user registration, classes, and schedules record"
            },
            technologies: ["Node.js", "PostgreSQL"],
            thumbnail: img_backend_project,
            links: [
                {
                    type: "Github",
                    url: "https://github.com/dsslucas/controle-monitoria-backend/tree/development"
                }
            ]
        }, {
            title: {
                pt: "Projeto de Gerenciamento de Locações V2.0",
                en: "Lease Management V2.0"
            },
            description: {
                pt: "Segundo projeto fullstack, que gerencia as locações e seus locatários.",
                en: "Second fullstack project, which manage leases and your tenants."
            },
            technologies: ["React.js", "Node.js", "PostgreSQL", "Material UI", "Chart.js"],
            thumbnail: img_projeto_locacao_v2,
            links: [
                {
                    type: "Github",
                    url: "https://github.com/dsslucas/projeto-aluguel-2.0-overview"
                }
            ]
        }, {
            title: {
                pt: "E-commerce Marama Lingerie",
                en: "Marama Lingerie E-commerce"
            },
            description: {
                pt: "Primeiro projeto fullstack, voltado para atender o e-commerce da Marama Lingerie.",
                en: "First fullstack project aimed at serving Marama Lingerie's e-commerce."
            },
            technologies: ["React.js", "Node.js", "Redux Saga", "PostgreSQL"],
            thumbnail: img_marama,
            links: [
                {
                    type: "Github",
                    url: "https://github.com/dsslucas/projeto-ecommerce"
                }
            ]
        }, {
            title: {
                pt: "Aplicativo de To-do",
                en: "To-do Application",
            },
            description: {
                pt: "Primeiro projeto em React Native, para fins de aprendizagem.",
                en: "First project in React Native, for learning purposes.",
            },
            technologies: ["React.js", "Node.js", "Redux Saga", "PostgreSQL"],
            thumbnail: img_todo,
            links: [
                {
                    type: "Github",
                    url: "https://github.com/dsslucas/estudos-react-native/tree/master/projeto-to-do-tasks"
                }
            ]
        }, {
            title: {
                pt: "Simulação de e-commerce",
                en: "E-commerce Simulation",
            },
            description: {
                pt: "Desafio proposto pela MKS Sistemas que simula um e-commerce.",
                en: "Challenge proposed by MKS Sistemas that simulates an e-commerce.",
            },
            technologies: ["React.js", "Redux Saga", "Styled Components"],
            thumbnail: img_mks,
            links: [
                {
                    type: "Github",
                    url: "https://github.com/dsslucas/desafio-loja-mks"
                }
            ]
        }, {
            title: {
                pt: "Sistema CRUD para mensagens",
                en: "CRUD Message System"
            },
            description: {
                pt: "Processo seletivo da CodeLeap que simula mensagens.",
                en: "CodeLeap selective process which simulate messages."
            },
            technologies: ["React.js", "Material UI", "Redux Saga"],
            thumbnail: img_codeleap,
            links: [
                {
                    type: "Github",
                    url: "https://github.com/dsslucas/project-frontend-codeleap"
                },
                {
                    type: "URL",
                    url: "https://project-frontend-codeleap.vercel.app/signup"
                }
            ]
        }, {
            title: {
                pt: "Projeto Ignite Lab - Rocketseat",
                en: "Ignite Lab - Rocketseat"
            },
            description: {
                pt: "Simulação da plataforma de eventos da Rocketseat.",
                en: "Simulation of Rocketseat Event Platform."
            },
            technologies: ["React.js", "TailwindCSS", "GraphCMS"],
            thumbnail: img_rocketseat,
            links: [
                {
                    type: "Github",
                    url: "https://github.com/dsslucas/estudo-react-rocketseat"
                }
            ]
        }, {
            title: {
                pt: "Lista de To-do",
                en: "Registro de tarefas para realização e listagem de atividades concluídas.",
            },
            description: {
                pt: "Simulação da plataforma de eventos da Rocketseat.",
                en: "Registro de tarefas para realização e listagem de atividades concluídas."
            },
            technologies: ["React.js", "Redux Saga", "Node.js", "MongoDB"],
            thumbnail: img_to_do,
            links: [
                {
                    type: "Github",
                    url: "https://github.com/dsslucas/projeto-todo-list"
                }
            ]
        }, {
            title: {
                pt: "Sistema de Controle de Gastos",
                en: "Expense Control System"
            },
            description: {
                pt: "Projeto que calcula os gastos de acordo com a receita informada.",
                en: "Project which does calculate the user' costs based on their money."
            },
            technologies: ["React.js", "Styled Components"],
            thumbnail: img_contador_gasto,
            links: [
                {
                    type: "Github",
                    url: "https://github.com/dsslucas/contador-gastos"
                }
            ]
        }, {
            title: {
                pt: "AluraCord",
                en: "AluraCord"
            },
            description: {
                pt: "Simulação do chat do Discord, coletando dados do GitHub.",
                en: "Discord chat simulation with user projectsData on GitHub."
            },
            technologies: ["React.js", "Next.js", "Material UI", "Supabase"],
            thumbnail: img_projeto_alura,
            links: [
                {
                    type: "Github",
                    url: "https://github.com/dsslucas/imersao-react-alura"
                }
            ]
        }, {
            title: {
                pt: "Projeto de Gerenciamento de Locações V1.0",
                en: "Lease Management V1.0"
            },
            description: {
                pt: "Projeto privado de um sistema de gerenciamento de locações.",
                en: "Private project of a lease management system."
            },
            technologies: ["React.js", "Material UI", "PostgreSQL", "C#"],
            thumbnail: img_projeto_locacao_v1,
            links: []
        }, {
            title: {
                pt: "Portfólio",
                en: "Portfolio",
            },
            description: {
                pt: "Elaborado para a Dra. Prof. Edna Dias Canedo.",
                en: "Elaborated to Dra. Prof. Edna Dias Canedo."
            },
            technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
            thumbnail: img_portfolio_edna,
            links: [
                {
                    type: "Github",
                    url: "https://github.com/ednacanedo/ednacanedo.github.io"
                },
                {
                    type: "URL",
                    url: "https://ednacanedo.github.io/"
                }
            ]
        }, {
            title: {
                pt: "IoT-Guide",
                en: "IoT-Guide",
            },
            description: {
                pt: "Trabalho de Conclusão de Curso.",
                en: "My Undergraduate Thesis."
            },
            technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
            thumbnail: img_iot_guide,
            links: [
                {
                    type: "Github",
                    url: "https://github.com/dsslucas/iot-guide"
                },
                {
                    type: "URL",
                    url: "https://dsslucas.github.io/iot-guide/sobre"
                }
            ]
        }
    ]
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("renderizei os projetos");

    const language = window.location.pathname.includes("en") ? "en" : "pt";

    const headerTitle = document.querySelector("#projects .headerSection h2");
    if (headerTitle) {
        headerTitle.textContent = projectsData.title[language];
    }

    renderProjects(null, language);

    const input = document.getElementById("project_find_card");
    input.placeholder = projectsData.searchInput[language];
    input.addEventListener("input", function (event) {
        renderProjects(event.target.value, language);
    });
});

function renderProjects(inputValue, language) {
    var searchTerm = undefined;
    var filteredProjects = projectsData.projects;

    var body = "";
    var technologies = "";
    var links = "";

    const teste = document.getElementById("projects_content_cards");
    teste.innerHTML = "";

    if (inputValue) {
        searchTerm = inputValue.toLowerCase();
        filteredProjects = projectsData.projects.filter(project =>
            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
        );
    }

    filteredProjects.forEach(element => {
        technologies = "";
        links = "";

        if (element.technologies.length > 0) {
            element.technologies.forEach((item) => {
                technologies += `<span class="professional_skill_span">${item}</span>`;
            })
        }

        if (element.links.length > 0) {
            element.links.forEach((item) => {
                var classIcon = "";
                if (item.type === "URL") classIcon = "fa-globe";
                else if (item.type === "Github") classIcon = "fa-brands fa-github";

                links += `
                    <a href=${item.url} target="_blank" class="redirectButton" title="Website">
                        <i class="fa ${classIcon}"></i>
                    </a>
                `;
            })
        }

        body += `
            <div class="col-sm-6 col-lg-3 mb-4 ps-0">
                <div class="card fadeIn">
                    <div class="card-image">
                        <img src=${element.thumbnail} class="card-img-top img-thumbnail"
                            alt="...">
                    </div>
                    <div class="card-header">
                        <h5 class="card-title">${element.title[language]}</h5>
                        <p class="card-text">${element.description[language]}</p>
                    </div>
                    <div class="card-body">
                        <div class="professional_skill">
                            ${technologies}
                        </div>
                    </div>
                    ${links ? `
                         <div class="card-footer">
                            ${links}
                        </div>
                    ` : ""}                   
                </div>
            </div>
        `;

        teste.innerHTML = body;

        imagesLoaded(teste, function () {
            new Masonry(teste, {
                itemSelector: '.col-sm-6',
                percentPosition: true
            });
        });
    });
}
