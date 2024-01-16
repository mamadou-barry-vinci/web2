const path = require('node:path');
// const escape = require('escape-html');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/questions.json');
const dbScorePath = path.join(__dirname, '/../data/games.json');

function readAll(level) {
  let allGames;
  const games = parse(jsonDbPath);
  if (level) {
    allGames = [...games].filter((game) => game.level === level);
    if (allGames.length === 0) return undefined;
  } else {
    allGames = [...games];
  }
  return allGames;
}

function getRandomQuestion(numberQuestion, listQuestion) {
  const listNumberQst = [];
  for (let i = 0; i < numberQuestion; i += 1) {
    const randomNumber = Math.floor(listQuestion.length * Math.random());
    listNumberQst.push(listQuestion[randomNumber]);
  }
  return listNumberQst;
}

function addScore(username, score, date) {
  const listScore = parse(dbScorePath, []);

  const newScore = {
    username,
    score,
    date,
  };

  listScore.push(newScore);

  serialize(dbScorePath, listScore);

  return newScore;
}

module.exports = {
  readAll,
  getRandomQuestion,
  addScore,
};
