var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var filmsRouter = require("./routes/films");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const lisMethodAndPath = [];
const compteurs = [];
app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.path);
  const methodAndPath = `${req.method} ${req.path}`;
  const index = lisMethodAndPath.indexOf(methodAndPath);

  if (index === -1) {
    lisMethodAndPath.push(methodAndPath);
    compteurs.push(1);
  } else {
    compteurs[index] = compteurs[index]++;
  }

  console.log("Request counter :");
  for (let i = 0; i < lisMethodAndPath.length; i++) {
    console.log(`${lisMethodAndPath[i]} : ${compteurs[i]}`);
  }
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/films", filmsRouter);

module.exports = app;
