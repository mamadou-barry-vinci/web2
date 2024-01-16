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
  res.json(FILMS);
});

module.exports = router;
