const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/films.json');

const films=[
    {
        id:1,
        title:"Harry Potter",
        duration:120,
        budjet:1000000,
        link:"https://fr.wikipedia.org/wiki/Harry_Potter_%C3%A0_l%27%C3%A9cole_des_sorciers_(film)"
    },
    {
        id:2,
        title:"John wick",
        duration:240,
        budjet:2000000,
        link:"https://fr.wikipedia.org/wiki/John_Wick_(film)"
    },
    {
        id:3,
        title:"les dents de la mer",
        duration:160,
        budjet:123043,
        link:"https://fr.wikipedia.org/wiki/Les_Dents_de_la_mer",
    }
];

function allFilms(){

    const FILMS=parse(jsonDbPath,films);

    return FILMS;
}

function searchById(id){

    const idNumber=parseInt(id,10);

    const indexOfFilms = allFilms().findIndex((film) => film.id === idNumber);

    return allFilms()[indexOfFilms];
}
function searchFilmByTitle(title){

    return allFilms().find((film) =>film.title===title);
}

function searchAllFilmsByDuration(Value){

    return allFilms().filter((film) => film.duration >= Value);
}

function lastIndexTableFilms(){

    const lastItemIndex = allFilms()?.length !==0 ? allFilms().length-1 : undefined;
    const lastId= lastItemIndex !== undefined ? allFilms()[lastItemIndex]?.id : 0;
    const nextId=lastId+1;
    return nextId;

}

function createOneFilm(title,duration,budjet,link){
    const FILMS=parse(jsonDbPath);
    const newFilm={
        id:lastIndexTableFilms(),
        title,
        duration,
        budjet,
        link
    };

    if(searchFilmByTitle((title)!==undefined)){
        return undefined;
    }

    FILMS.push(newFilm);
    serialize(jsonDbPath,FILMS);
    return newFilm;
}

function deleteById(id){
    const FILMS=parse(jsonDbPath);
    const idNumber=parseInt(id,10);
    const foundindex=allFilms().findIndex(film => film.id === idNumber);
    
    if(foundindex<0) return undefined;

    const filmRemovedFromMenu = allFilms().splice(id,1);
    const filmToRemoved = filmRemovedFromMenu[0];

    serialize(jsonDbPath,FILMS);
    return filmToRemoved;
}



module.exports = {
    allFilms,
    searchById,
    searchFilmByTitle,
    searchAllFilmsByDuration,
    lastIndexTableFilms,
    createOneFilm,
    deleteById
  };