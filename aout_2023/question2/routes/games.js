const express = require('express');
const { readAll, getRandomQuestion, addScore } = require('../models/games');

const router = express.Router();

/* Read all the quizz
 */
router.get('/start', (req, res) => {
  const allGames = readAll(req?.query?.level);
  if (!allGames) {
    return res.send('Pas de devinettes de ce niveau', 400);
  }
  const devinettes = getRandomQuestion(3, allGames);
  return res.json(devinettes);
});

router.post('/', (req, res) => {
  const score = req?.body?.score?.length !== 0 ? req.body.score : undefined;
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;

  if (!score || !username) return res.sendStatus(400); // error code '400 Bad request'

  const entierScore = parseInt(score, 10);
  if (Number.isNaN(entierScore)) return res.sendStatus(400);

  const dateScore = new Date();
  const newScore = addScore(username, score, dateScore);

  return res.json(newScore);
});

module.exports = router;
