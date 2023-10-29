const about = {
    title: {
        en_US: "About",
        pt_BR: "Sobre"
    },
    education: {
        title: {
            en_US: "Education",
            pt_BR: "Formação educacional"
        },
        college: {
            en_US: "University of Brasilia (UnB)",
            pt_BR: "Universidade de Brasília (UnB)"
        },
        time: {
            en_US: "Mar/2016 to May/2022",
            pt_BR: "Mar/2016 a Mai/2022"
        },
        description: {
            en_US: "Degree in Computer Science",
            pt_BR: "Graduação no curso de Licenciatura em Computação."
        }
    },
    technologies: {
        title: {
            en_US: "Technologies",
            pt_BR: "Tecnologias"
        },
    },
    professionalExperiences: {
        en_US: "Professional Experiences",
        pt_BR: "Experiências profissionais"
    }
}

function renderEducationTitle(item, language){
    document.write(about["education"][item][language]);
}

function renderEducationCollegeName(item, language){
    var college = about["education"][item][language];
    var time = about["education"]["time"][language];
    document.write(`${college} - ${time}`);
}

function renderEducationDescription(item, language){
    document.write(about["education"][item][language]);
}

function renderProfessionalExperiencesTitle(item, language){
    document.write(about[item][language]);
}

function renderTechnologyTitle(item, language){
    document.write(about[item]["title"][language]);
}