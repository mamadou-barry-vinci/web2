var express = require('express');
var router = express.Router();

const FILMS = [
  {
    id: 1,
    title: '4 fromages',
    duration: 250,
    budget:10000,
    link:'lien1'
  },
  {
    id: 2,
    title: 'Vegan',
    duration: 350,
    budget:10000,
    link:'lien2'
  },
  {
    id: 3,
    title: 'Vegetarian',
    duration: 150,
    budget:10000,
    link:'lien3'
  },
  {
    id: 4,
    title: 'Alpage',
    duration: 100,
    budget:10000,
    link:'lien4'
  },
  {
    id: 5,
    title: 'Diable',
    duration: 50,
    budget:10000,
    link:'lien5'
  },
];

// Read all the pizzas from the menu
router.get('/', (req, res, next) => {
  console.log('GET /films');
  let min = req?.query['minimum-duration'];
  console.log(min);
  console.log(isNaN(min)); // renvoie true si pas chiffre et false si chiffre

  let filtre = [];
  //if chiffre
  if (!isNaN(min)){
    FILMS.forEach(element => {
      if (element.duration >=  parseInt(min)){
        filtre.push(element);
      }
    });
    return res.json(filtre);
  }
  
  res.json(FILMS);
});

// Read the films identified by an id in the menu
router.get('/:id', (req, res) => {

  const indexOfFilmFound = FILMS.findIndex((film) => film.id == req.params.id);

  if (indexOfFilmFound < 0) return res.sendStatus(404);

  res.json(FILMS[indexOfFilmFound]);
});

// Create a pizza to be added to the menu.
router.post('/', (req, res) => {
  console.log('POST /films');

  console.log(req.body);
  let film = {
    id : undefined,
    title: req?.body?.title,
    duration: req?.body?.duration,
    budget: req?.body?.budget,
    link: req?.body?.link,
  };

  if (film.title === undefined || film.duration === undefined || film.budget === undefined || film.link === undefined) {
    return res.status(400).send('Il manque une info pour les films');
  }

  if (!isNaN(film.duration) && parseInt(film.duration) > 0){
    if (!isNaN(film.budget) && parseInt(film.budget) > 0){
      film.budget = parseInt(film.budget);
      film.duration = parseInt(film.duration);
    }
    else{
      return res.status(400).send('Le budget doit être un entier et strictement positif');
    }
  }
  else{
    return res.status(400).send('La durée du film doit être un entier et strictement positif');
  }
  const lastItemIndex = FILMS?.length !== 0 ? FILMS.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? FILMS[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  film.id = nextId;

  res.json(film);
});



module.exports = router;
