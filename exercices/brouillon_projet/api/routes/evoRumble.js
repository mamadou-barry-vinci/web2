const express = require('express');
const { getAllMonsters, getMonstersByType } = require('../models/evoRumble');

const router = express.Router();

router.get('/', (req, res) => {
  const allMonsters = getAllMonsters();

  return res.json(allMonsters);
});

router.get('/:type', (req, res) => {
  const allMonsters = getMonstersByType(req.params.type);

  return res.json(allMonsters);
});

module.exports = router;
