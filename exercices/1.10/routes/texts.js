const express = require('express');
const {
  readAllTexts,
  getTextId,
  addtext, 
  deleteText,
  updateText
} = require('../models/texts');

const router = express.Router();

router.get('/', (req, res) => {
    const level = req?.query?.level;
    console.log(level);
    const allTexts = readAllTexts(level);
    if (allTexts === undefined) res.sendStatus(400);
    return res.json(allTexts);
  });

  router.get('/:id', (req, res) => {
    console.log(req.params.id);
    const text = getTextId(req.params.id);
    if (text === undefined) return res.sendStatus(400);
    return res.json(text);
  });

router.post('/', (req, res) => {
    const content = req?.body?.content;
    const level = req?.body?.level;

    const newText = addtext(content, level);
    if (newText === undefined) return res.sendStatus(400);

    return res.json(newText);
});

router.delete('/:id', (req, res) => {
    const text = deleteText(req.params.id)
    if (text === undefined) return res.sendStatus(400);
    return res.json(text);
});

router.put('/:id', (req, res) => {
    if (req?.body?.content === undefined) return res.sendStatus(400);
    if (req?.body?.level === undefined) return res.sendStatus(400);

    const text = updateText(req.params.id, req.body.content, req.body.level);
    return res.json(text);
});

module.exports = router;