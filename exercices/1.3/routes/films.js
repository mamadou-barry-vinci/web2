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
    // res.json(filtre);
  }
  
  res.json(filtre);
});

// Read the films identified by an id in the menu
router.get('/:id', (req, res) => {

  const indexOfFilmFound = FILMS.findIndex((film) => film.id == req.params.id);

  if (indexOfFilmFound < 0) return res.sendStatus(404);

  res.json(FILMS[indexOfFilmFound]);
});


module.exports = router;
