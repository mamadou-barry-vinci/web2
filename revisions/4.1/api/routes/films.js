/* eslint-disable no-console */
const express = require('express');
const {authorize} = require('../utils/auth');

// const { serialize, parse } = require('../utils/json');


// eslint-disable-next-line import/order

const {
    allFilms,
    searchById,
    searchFilmByTitle,
    searchAllFilmsByDuration,
    createOneFilm,
    deleteById

  } = require('../models/films');

const router = express.Router();
// eslint-disable-next-line no-unused-vars


const isempty=(objet)=> JSON.stringify(objet)==="{}";


/* GET films page. */
/* OR filter by minimum-duration  */
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res,next) => {

  const value=req?.query?.['minimum-duration'] ? req.query['minimum-duration'] : undefined;
  
  if(!isempty(req.query)){
        if(!Number.isNaN(value)){
            return res.json(searchAllFilmsByDuration(value));
        }
        return res.sendStatus(404);
    }
   return res.json(allFilms());
    
});

/* GET films by id. */
router.get('/:id',(req,res)=>{
    // eslint-disable-next-line no-console
    
    const theFilm=searchById(req.params.id);

    if (!theFilm) return res.sendStatus(404);
    
    return res.json(theFilm);
});

router.post('/' ,authorize, (req, res) => {
    const title=req?.body?.title !==0 ? req.body.title : undefined;
    const duration= req?.body?.duration >0 ? req.body.duration : undefined;
    const budjet=req?.body?.budjet >0 ? req.body.budjet : undefined;
    const link= req?.body?.link !==0 ? req.body.link : undefined;

    if(!title || !duration || !budjet || !link) return res.sendStatus(404);

    const resultat=createOneFilm(title,duration,budjet,link);

   
    return res.json(resultat);
});

router.delete('/:id',(req,res)=>{

    
    if (Number.isNaN(req.params.id)) {
        console.log("COUSIN c'est pas un nombre");
        return res.sendStatus(400);
    }

    const filmToDelete=deleteById(req.params.id);
    if(filmToDelete===undefined){
        return res.sendStatus(400);
    }
    return res.json(filmToDelete);
    

});

/*
router.patch('/:id',(req,res)=>{
    const title=req?.body?.title !==0 ? req.body.title : undefined;
    const duration= req?.body?.duration >0 ? req.body.duration : undefined;
    const budjet=req?.body?.budjet >0 ? req.body.budjet : undefined;
    const link= req?.body?.link !==0 ? req.body.link : undefined;

    if(!title && !duration && !budjet && !link) return res.sendStatus(400);

    const FILMS = parse(jsonDbPath);

    const foundIndex = FILMS.findIndex(film => film.id === req.params.id);

    if (foundIndex < 0) return res.sendStatus(404);  

    const updatefilm={...FILMS[foundIndex],...req.body};
    FILMS[foundIndex]=updatefilm;
    serialize(jsonDbPath,FILMS);
    return res.json(updatefilm);

}); 

router.put('/:id',(req,res)=>{
    const title=req?.body?.title !==0 ? req.body.title : undefined;
    const duration= req?.body?.duration >0 ? req.body.duration : undefined;
    const budjet=req?.body?.budjet >0 ? req.body.budjet : undefined;
    const link= req?.body?.link !==0 ? req.body.link : undefined;

    if(!title && !duration && !budjet && !link) return res.sendStatus(400);

    const FILMS = parse(jsonDbPath);

    const foundIndex = FILMS.findIndex(film => film.id === req.params.id);

    if (foundIndex < 0){
        const newFilm= {
            id:req.params.id,
            title,
            duration,
            budjet,
            link
        }
        FILMS.push(newFilm);
    }   

    const updatefilm={...FILMS[foundIndex],...req.body};
    FILMS[foundIndex]=updatefilm;

    serialize(jsonDbPath,FILMS);
    return res.json(updatefilm);

}); */

module.exports = router;
