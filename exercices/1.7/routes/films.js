var express = require('express');
const { serialize, parse } = require('../utils/json');
var router = express.Router();

const jsonDbPath = __dirname + '/../data/films.json';

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
    title: 'test',
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

  const films = parse(jsonDbPath, FILMS);
  let filtre = [];
  //if chiffre
  if (!isNaN(min)){
    films.forEach(element => {
      if (element.duration >=  parseInt(min)){
        filtre.push(element);
      }
    });
    return res.json(filtre);
  }
  
  res.json(films);
});

// Read the films identified by an id in the menu
router.get('/:id', (req, res) => {
  
  const films = parse(jsonDbPath, FILMS);

  const indexOfFilmFound = films.findIndex((film) => film.id == req.params.id);

  if (indexOfFilmFound < 0) return res.sendStatus(404);

  res.json(films[indexOfFilmFound]);
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

  for (let i = 0; i < FILMS.length; i++) {
    if (FILMS[i].title === film.title) return res.sendStatus(409);
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

  const films = parse(jsonDbPath, FILMS);
  const lastItemIndex = films?.length !== 0 ? films.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? films[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  film.id = nextId;
  films.push(film);

  serialize(jsonDbPath, films);

  res.json(films);
});

router.delete('/:id', (req, res) => {
  console.log(`DELETE /films/${req.params.id}`);

  const films = parse(jsonDbPath, FILMS);

  let index = films.findIndex(film => film.id == req.params.id);
  
  // for (let i = 0; i < FILMS.length; i++) {
  //   if (FILMS[i].id == req.params.id) {
  //     index = i;
  //     break;
  //   }
  // }

  if (index === -1) return res.sendStatus(400);
  let itemRemoved = films.splice(index, 1);

  serialize(jsonDbPath, films);

  res.json(itemRemoved[0]);
});

// Update a pizza based on its id and new values for its parameters
router.patch('/:id', (req, res) => {
  console.log(`PATCH /pizzas/${req.params.id}`);

  if (!req.body.title && !req.body.duration && !req.body.budget && !req.body.link) return res.sendStatus(400);
  if (req.body.duration && isNaN(req.body.duration) && parseInt(req.body.duration)>0) return res.sendStatus(400);
  if (req.body.budget && isNaN(req.body.budget) && parseInt(req.body.budget)>0) return res.sendStatus(400);

  const films = parse(jsonDbPath, FILMS);

  let index = films.findIndex(film => film.id == req.params.id);

  if (index === -1) return res.sendStatus(400);

  const updatedFilm = {...films[index], ...req.body};

  films[index] = updatedFilm;

  serialize(jsonDbPath, films);

  res.json(updatedFilm);
});


// Update a pizza based on its id and new values for its parameters
router.put('/:id', (req, res) => {
  console.log(`PATCH /pizzas/${req.params.id}`);

  if (!req.body.title && !req.body.duration && !req.body.budget && !req.body.link) return res.sendStatus(400);
  if (req.body.duration && isNaN(req.body.duration) && parseInt(req.body.duration)>0) return res.sendStatus(400);
  if (req.body.budget && isNaN(req.body.budget) && parseInt(req.body.budget)>0) return res.sendStatus(400);

  const films = parse(jsonDbPath, FILMS);

  let index = undefined;
  for (let i = 0; i < films.length; i++) {
    if (films[i].id == req.params.id) {
      index = i;
      break;
    }
  }

  if (index !== undefined){
    const updatedFilm = {...films[index], ...req.body};

    films[index] = updatedFilm;
    serialize(jsonDbPath, films);

    return res.json(updatedFilm);
  }

  let lastID = FILMS.length;
  let nvFilm = {
    id : lastID+1,
    title : req.body.title,
    duration : req.body.duration,
    budget : req.body.budget, 
    link : req.body.link
  }

  films.push(nvFilm);
  serialize(jsonDbPath, films);
  return res.json(nvFilm);

  
});


module.exports = router;
