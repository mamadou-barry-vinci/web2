var express = require("express");
var router = express.Router();

const FILMS = [
  {
    id: 1,
    title: "4 fromages",
    duration: 150,
    budget: 10000,
    link: "lien1",
  },
  {
    id: 2,
    title: "Vegan",
    duration: 150,
    budget: 10000,
    link: "lien2",
  },
  {
    id: 3,
    title: "Vegetarian",
    duration: 150,
    budget: 10000,
    link: "lien3",
  },
  {
    id: 4,
    title: "Alpage",
    duration: 150,
    budget: 10000,
    link: "lien4",
  },
  {
    id: 5,
    title: "Diable",
    duration: 150,
    budget: 10000,
    link: "lien5",
  },
];

/* GET films listing. */
router.get("/", function (req, res, next) {
  const min = req?.query?.["minimum-duration"];

  if (!min) {
    return res.json(FILMS);
  } else {
    let filteredFilms = [...FILMS].filter((film) => film.duration >= min);
    return res.json(filteredFilms);
  }
});

/* GET the film corresponding to the id. */
router.get("/:id", function (req, res, next) {
  console.log("GET the film corresponding to the id");
  const id = req.params.id;
  const film = FILMS.filter((film) => film.id == id);
  res.json(film);
});

/* POST the new film. */
router.post("/", (req, res) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const duration = req?.body?.duration ? req.body.duration : undefined;
  const budget = req?.body?.budget ? req.body.budget : undefined;
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;

  console.log(title);
  console.log(duration);
  console.log(budget);
  console.log(link);

  if (!title || !link) return res.sendStatus(400);

  const convertedDuration = parseInt(duration);
  if (isNaN(convertedDuration)) return res.sendStatus(400);

  const convertedBudget = parseInt(budget);
  if (isNaN(convertedBudget)) return res.sendStatus(400);

  const maxId = Math.max(...FILMS.map((film) => film.id));
  console.log(maxId);

  const newFilm = {
    id: maxId,
    title,
    convertedDuration,
    convertedDuration,
    link,
  };

  FILMS.push(newFilm);
  console.log(newFilm);
  return res.json(newFilm);
});

module.exports = router;
