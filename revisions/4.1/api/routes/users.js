const express = require('express');
const {register,login} = require('../models/users');


const router = express.Router();

router.post('/register', (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!username || !password) return res.sendStatus(400);

  const newUser = register(username, password);

  if(!newUser) return res.sendStatus(409);

  return res.json(newUser);
});

router.post('/login', (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!username || !password) return res.sendStatus(400);

  const userconnected=login(username,password)

  if(!userconnected) return res.sendStatus(401);

  return res.json(userconnected);
  
});

module.exports = router;
