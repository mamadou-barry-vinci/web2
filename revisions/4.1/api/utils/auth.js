/* eslint-disable no-console */
/* eslint-disable no-useless-catch */

const jwt = require('jsonwebtoken');

const jwtSecret = 'secret';
const user = require('../models/users');

const authorize = (req, res, next) => {
  const token = req.get('authorization');
  if (!token) return res.sendStatus(401);

  try {
    
    const decoded = jwt.verify(token, jwtSecret);
    const { username } = decoded;
   
    const userExist=user.readUserByUsername(username);

    if (!userExist) return res.sendStatus(401);

    req.user = userExist;

    return next();
  } catch (error) {
    console.error("autorization: ",error);
    return res.sendStatus(401);
  }
  
};


module.exports = {
  authorize
};