const films = [];
function ajouterFilm(title,duration,budget,link){
    films.push({
        title,
        duration,
        budget,
        link
    });
}

function lesfilms(){
    return films;
}

export {ajouterFilm,lesfilms};