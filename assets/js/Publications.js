const image = "assets/img/other/print article.jpg";
const publicationImage = document.getElementById("publication_image")

const publications = {
    title: {
        en_US: "Publications",
        pt_BR: "Publicações"
    },
    image: image,
    titlePublication: {
        en_US: "Requirements Engineering Processes in the Context of IoT and Requirements Validation Techniques",
        pt_BR: "Requirements Engineering Processes in the Context of IoT and Requirements Validation Techniques"
    },
    subtitlePublication: {
        en_US: "Article presented at WER 2022, based on the Course Completion Work (TCC on Brazil) that I carried out in partnership with Felipe Ayres and guided by Dr. Prof. Edna Dias Canedo, presented on August 9, 2021 at the University of Brasília (UnB).",
        pt_BR: "Artigo apresentado no WER 2022, baseado no Trabalho de Conclusão de Curso (TCC) que realizei com parceria de Felipe Ayres e orientado pela Dra. Prof. Edna Dias Canedo, apresentado em 09 de Agosto de 2021 na Universidade de Brasília (UnB)."
    },
    content: {
        en_US: "The article consists of a study in the literature on the processes and techniques of Requirements Engineering aimed at data validation in the context of the Internet of Things (IoT). Based on this, the IoT-Guide was proposed, with the aim of guiding academic and professional projects that adopt IoT and that need to legitimize these data.",
        pt_BR: "O artigo consiste de um estudo na literatura sobre os processos e técnicas da Engenharia de Requisitos voltadas para a validação de dados no contexto de Internet das Coisas (IoT). Com base nisto, foi proposto o IoT-Guide, com o intuito de nortear projetos acadêmicos e profissionais que adotem IoT e que necessitam de uma legitimação destes dados."
    },
    links: {
        en_US: [
            {
                title: "Article",
                url: "http://wer.inf.puc-rio.br/WERpapers/artigos/artigos_WER22/WER_2022_Camera_ready_paper_31.pdf"
            },
            {
                title: "Thesis",
                url: "https://bdm.unb.br/handle/10483/29066"
            },
            {
                title: "Guide",
                url: "https://dsslucas.github.io/iot-guide/sobre"
            }
        ],
        pt_BR: [
            {
                title: "Artigo",
                url: "http://wer.inf.puc-rio.br/WERpapers/artigos/artigos_WER22/WER_2022_Camera_ready_paper_31.pdf"
            },
            {
                title: "TCC",
                url: "https://bdm.unb.br/handle/10483/29066"
            },
            {
                title: "Guia",
                url: "https://dsslucas.github.io/iot-guide/sobre"
            }
        ]
    }
}

function renderPublicationMainTitle(item, language) {
    document.write(publications[item][language]);
}

function renderPublicationTitlePublication(item, language) {
    console.log("entrei")
    document.write(publications[item][language]);
}

function renderPublicationSubtitle(item, language) {
    document.write(publications[item][language]);
}

function renderPublicationContent(item, language) {
    document.write(publications[item][language]);
}

function renderPublicationTitle(item, language) {

}

function renderButtonsLinks(item, language) {
    const buttonArticle = document.getElementById("button_article");
    const buttonTcc = document.getElementById("button_tcc");
    const buttonGuide = document.getElementById("button_guide");

    if (item === "article") {
        buttonArticle.innerHTML = publications["links"][language][0].title;
        buttonArticle.setAttribute('href', publications["links"][language][0].url);
    }
    else if (item === "tcc") {
        buttonTcc.innerHTML = publications["links"][language][1].title;
        buttonTcc.setAttribute('href', publications["links"][language][1].url);
    }
    else if (item === "guide") {
        buttonGuide.innerHTML = publications["links"][language][2].title;
        buttonGuide.setAttribute('href', publications["links"][language][2].url);
    }
}
