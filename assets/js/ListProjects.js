const img_projeto_locacao_v2 = "assets/img/project/projeto_locacao_v2.png";
const img_marama = "assets/img/project/marama.png"
//import * as img_marama from 'assets/img/project/marama.png';
const img_todo = "assets/img/project/task-reactnative.jpg"
const img_mks = "assets/img/project/mks.png"
const img_codeleap = "assets/img/project/CodeLeap.png"
const img_rocketseat = "assets/img/project/estudo-react-rocketseat.png"
const img_to_do = "assets/img/project/to-do.png"
const img_contador_gasto = "assets/img/project/controle-gastos.png"
const img_projeto_alura = "assets/img/project/projeto_alura.png"
const img_projeto_locacao_v1 = "assets/img/project/rent-management.png"
const img_portfolio_edna = "assets/img/project/portfolio-edna.png"
const img_iot_guide = "assets/img/project/iot-guide-full.png"
const img_controle_gastos = "assets/img/project/controle-gastos-2.0.png"
const img_backend_project = "assets/img/project/backend.jpg"
const img_goledger = "assets/img/project/goledger.png"
const img_b7 = "assets/img/project/challenge-b7.png"

const teste = document.getElementById("card_content_wrapper");

const projects_pt = [
    {
        title: "Desafio Fullstack - B7",
        description: "Registro de produtos, suas categorias e usuários.",
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
    },
    {
        title: "Desafio - GoLedger",
        description: "Registro de artistas, álbuns, músicas e playlists em blockchain.",
        technologies: ["React.js", "Node.js", "Blockchain", "TailwindCSS"],
        thumbnail: img_goledger,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/goledger-challenge-web"
            }
        ]
    },
    {
        title: "Imersão Backend Node.js - Alura",
        description: "Requisições CRUD utilizando Node.js, MongoDB e Gemini.",
        technologies: ["Node.js", "MongoDB", "Gemini"],
        thumbnail: img_backend_project,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/curso-backend-gemini-alura"
            }
        ]
    },
    {
        title: "Projeto de Controle de Gastos V2.0",
        description: "Registro e catalogação de gastos por categoria.",
        technologies: ["React.js", "Node.js", "PostgreSQL", "TailwindCSS"],
        thumbnail: img_controle_gastos,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/projeto-controle-gastos"
            }
        ]
    },
    {
        title: "Controle de monitoria (Backend)",
        description: "Projeto para gerenciamento de monitorias, havendo registro de usuário, aulas e horários.",
        technologies: ["Node.js", "PostgreSQL"],
        thumbnail: img_backend_project,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/controle-monitoria-backend/tree/development"
            }
        ]
    },
    {
        title: "Projeto de Gerenciamento de Locações V2.0",
        description: "Segundo projeto fullstack, que gerencia as locações e seus locatários.",
        technologies: ["React.js", "Node.js", "PostgreSQL", "Material UI", "Chart.js"],
        thumbnail: img_projeto_locacao_v2,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/projeto-aluguel-2.0-overview"
            }
        ]
    },
    {
        title: "E-commerce Marama Lingerie",
        description: "Primeiro projeto fullstack, voltado para atender o e-commerce da Marama Lingerie.",
        technologies: ["React.js", "Node.js", "Redux Saga", "PostgreSQL"],
        thumbnail: img_marama,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/projeto-ecommerce"
            }
        ]
    },
    {
        title: "Aplicativo de To-do",
        description: "Primeiro projeto em React Native, para fins de aprendizagem.",
        technologies: ["React.js", "Node.js", "Redux Saga", "PostgreSQL"],
        thumbnail: img_todo,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/estudos-react-native/tree/master/projeto-to-do-tasks"
            }
        ]
    },
    {
        title: "Simulação de e-commerce",
        description: "Desafio proposto pela MKS Sistemas que simula um e-commerce.",
        technologies: ["React.js", "Redux Saga", "Styled Components"],
        thumbnail: img_mks,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/desafio-loja-mks"
            }
        ]
    },
    {
        title: "Sistema CRUD para mensagens",
        description: "Processo seletivo da CodeLeap que simula mensagens.",
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
    },
    {
        title: "Projeto Ignite Lab - Rocketseat",
        description: "Simulação da plataforma de eventos da Rocketseat.",
        technologies: ["React.js", "TailwindCSS", "GraphCMS"],
        thumbnail: img_rocketseat,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/estudo-react-rocketseat"
            }
        ]
    },
    {
        title: "Lista de To-do",
        description: "Registro de tarefas para realização e listagem de atividades concluídas.",
        technologies: ["React.js", "Redux Saga", "Node.js", "MongoDB"],
        thumbnail: img_to_do,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/projeto-todo-list"
            }
        ]
    },
    {
        title: "Sistema de Controle de Gastos",
        description: "Projeto que calcula os gastos de acordo com a receita informada.",
        technologies: ["React.js", "Styled Components"],
        thumbnail: img_contador_gasto,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/contador-gastos"
            }
        ]
    },
    {
        title: "AluraCord",
        description: "Simulação do chat do Discord, coletando dados do GitHub.",
        technologies: ["React.js", "Next.js", "Material UI", "Supabase"],
        thumbnail: img_projeto_alura,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/imersao-react-alura"
            }
        ]
    },
    {
        title: "Projeto de Gerenciamento de Locações V1.0",
        description: "Projeto privado de um sistema de gerenciamento de locações.",
        technologies: ["React.js", "Material UI", "PostgreSQL", "C#"],
        thumbnail: img_projeto_locacao_v1,
        links: [
        ]
    },
    {
        title: "Portfólio",
        description: "Elaborado para a Dra. Prof. Edna Dias Canedo.",
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
    },
    {
        title: "IoT-Guide",
        description: "Trabalho de Conclusão de Curso.",
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
    },
]

const projects_en = [
    {
        title: "Fullstack Challenge - B7",
        description: "Register of products, their categories and users.",
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
    },
    {
        title: "Challenge - GoLedger",
        description: "Register of artist, albums, songs and playlists in blockchain application.",
        technologies: ["React.js", "Node.js", "Blockchain", "TailwindCSS"],
        thumbnail: img_goledger,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/goledger-challenge-web"
            }
        ]
    },
    {
        title: "Backend Immersion Node.js - Alura",
        description: "CRUD requests using Node.js, MongoDB and Gemini.",
        technologies: ["Node.js", "MongoDB", "Gemini"],
        thumbnail: img_backend_project,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/curso-backend-gemini-alura"
            }
        ]
    },
    {
        title: "Expense Control Project V2.0",
        description: "Register and show payments by category and payment method.",
        technologies: ["React.js", "Node.js", "PostgreSQL", "TailwindCSS"],
        thumbnail: img_controle_gastos,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/projeto-controle-gastos"
            }
        ]
    },
    {
        title: "Monitoring Control (Backend)",
        description: "Project for monitoring management, with user registration, classes, and schedules record",
        technologies: ["Node.js", "PostgreSQL"],
        thumbnail: img_backend_project,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/controle-monitoria-backend/tree/development"
            }
        ]
    },
    {
        title: "Lease Management V2.0",
        description: "Second fullstack project, which manage leases and your tenants.",
        technologies: ["React.js", "Node.js", "PostgreSQL", "Material UI", "Chart.js"],
        thumbnail: img_projeto_locacao_v2,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/projeto-aluguel-2.0-overview"
            }
        ]
    },
    {
        title: "Marama Lingerie E-commerce",
        description: "First fullstack project aimed at serving Marama Lingerie's e-commerce.",
        technologies: ["React.js", "Node.js", "Redux Saga", "PostgreSQL"],
        thumbnail: img_marama,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/projeto-ecommerce"
            }
        ]
    },
    {
        title: "To-do Application",
        description: "First project in React Native, for learning purposes.",
        technologies: ["React.js", "Node.js", "Redux Saga", "PostgreSQL"],
        thumbnail: img_todo,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/estudos-react-native/tree/master/projeto-to-do-tasks"
            }
        ]
    },
    {
        title: "E-commerce Simulation",
        description: "Challenge proposed by MKS Sistemas that simulates an e-commerce.",
        technologies: ["React.js", "Redux Saga", "Styled Components"],
        thumbnail: img_mks,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/desafio-loja-mks"
            }
        ]
    },
    {
        title: "CRUD Message System",
        description: "CodeLeap selective process which simulate messages.",
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
    },
    {
        title: "Ignite Lab - Rocketseat",
        description: "Simulation of Rocketseat Event Platform.",
        technologies: ["React.js", "TailwindCSS", "GraphCMS"],
        thumbnail: img_rocketseat,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/estudo-react-rocketseat"
            }
        ]
    },
    {
        title: "To-do List",
        description: "Registro de tarefas para realização e listagem de atividades concluídas.",
        technologies: ["React.js", "Redux Saga", "Node.js", "MongoDB"],
        thumbnail: img_to_do,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/projeto-todo-list"
            }
        ]
    },
    {
        title: "Expense Control System",
        description: "Project which does calculate the user' costs based on their money.",
        technologies: ["React.js", "Styled Components"],
        thumbnail: img_contador_gasto,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/contador-gastos"
            }
        ]
    },
    {
        title: "AluraCord",
        description: "Discord chat simulation with user data on GitHub.",
        technologies: ["React.js", "Next.js", "Material UI", "Supabase"],
        thumbnail: img_projeto_alura,
        links: [
            {
                type: "Github",
                url: "https://github.com/dsslucas/imersao-react-alura"
            }
        ]
    },
    {
        title: "Lease Management V1.0",
        description: "Private project of a lease management system.",
        technologies: ["React.js", "Material UI", "PostgreSQL", "C#"],
        thumbnail: img_projeto_locacao_v1,
        links: [
        ]
    },
    {
        title: "Portfolio",
        description: "Elaborated to Dra. Prof. Edna Dias Canedo.",
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
    },
    {
        title: "IoT-Guide",
        description: "My Undergraduate Thesis.",
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
    },
]

function renderizeProjects(data){
    var body = "";
    var technologies = "";
    var links = "";

    data.forEach(element => {
        technologies = "";
        links = "";

        if (element.technologies.length > 0) {
            element.technologies.forEach((item) => {
                technologies += `<span class="span_professional_skills">${item}</span>`;
            })
        }

        if (element.links.length > 0) {
            element.links.forEach((item) => {
                var classIcon = ""
                if(item.type === "URL") classIcon = "fa-globe"
                else if(item.type === "Github") classIcon = "fa-github"

                links += `
                    <span>
                        <a href=${item.url} target="_blank">
                            <i class="fa ${classIcon} fa-2x"></i>
                        </a>
                    </span>
                `
            })
        }

        body += `
            <div class="card">
                <div class="card-image">
                    <img src=${element.thumbnail} class="card-img-top img-thumbnail" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.description}</p>
                    <div class="card-skills">
                        ${technologies}                     
                    </div>
                    <div class="card-links">
                       ${links}
                    </div>
                </div>
            </div>            
        `;
        teste.innerHTML = body;
    })
}

function renderProjects(language) {
    if (language == "pt_BR") renderizeProjects(projects_pt)
    else if(language == "en_US") renderizeProjects(projects_en)
}
