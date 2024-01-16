const jwt = require('jsonwebtoken');
const path = require('node:path');
const { parse, serialize } = require('../utils/json');


const jsonDbPath = path.join(__dirname,'/../data/users.json');

const jwtSecret = 'secret';


const lifetimeJwt = 24 * 60 * 60 * 1000; // in ms : 24 * 60 * 60 * 1000 = 24h

const users = [
  {
    id: 1,
    username: "eric",
    password: "eric"
  }
];

function readUserByUsername(username) {

  const USERS = parse(jsonDbPath, users);

  const index = USERS.findIndex((user) => user.username === username);
  if (index < 0) return undefined;

  
  return USERS[index];
}

function register(username, password) {
  
  const userFound = readUserByUsername(username);
  if (userFound) return undefined;
  
  createUser(username, password);

  const token = jwt.sign(
    { username },
    jwtSecret, 
    { expiresIn: lifetimeJwt },
    );
   

  const userConnected = {
    username,
    token,
  };
  return userConnected;
}

function login(username, password) {
  const infosUser = readUserByUsername(username);
  if (!infosUser) return undefined;

  if (infosUser.password !== password) return undefined;

  const token = jwt.sign(
    { username }, 
    jwtSecret, 
    { expiresIn: lifetimeJwt },
    );

  const userConnected = {
    username,
    token,
  };
  return userConnected;
}
function getNextId() {
  const USERS = parse(jsonDbPath,users);
  const lastItemIndex = USERS?.length !== 0 ? USERS.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = USERS[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

function createUser(username, password) {
  const USERS = parse(jsonDbPath,users);

  const newUser = {
    id: getNextId(),
    username,
    password,
  };

  USERS.push(newUser);

  serialize(jsonDbPath, USERS);
  return newUser;
}
module.exports = {
  readUserByUsername,
  register,
  login,
};
