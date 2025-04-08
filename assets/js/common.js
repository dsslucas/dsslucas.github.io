function renderDate(date, language){
    language == "pt" ? "pt_BR" : "en_US"

    return date.toLocaleDateString(language, {
        month: 'long',
        year: 'numeric'
    }).replace(/^./, str => str.toUpperCase());
}

function renderDateFormatted(firstDate, lastDate, language) {
    if (!firstDate || !language) return null;

    const getFormattedDate = (date, lang, withPreposition = false) => {
        const options = { month: 'long', year: 'numeric' };
        const locale = lang === 'pt' ? 'pt-BR' : 'en-US';
        let formatted = new Date(date).toLocaleDateString(locale, options);    
        formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
        return lang === 'pt' && withPreposition ? formatted.replace(/ (de)? /, ' de ') : formatted;
    };

    const firstDateStr = getFormattedDate(firstDate, language, true);

    let lastDateStr = '';
    if (lastDate) {
        const parsedDate = new Date(lastDate);
        if (!isNaN(parsedDate.getTime())) {
            lastDateStr = getFormattedDate(lastDate, language, true);
        }
    }

    if (!lastDateStr) {
        lastDateStr = language === 'pt' ? 'o momento' : 'present';
    }

    return `${firstDateStr} - ${lastDateStr}`;
}
