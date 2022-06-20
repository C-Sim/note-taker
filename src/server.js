const express = require("express");

const routes = require("./routes");

// const logger = require("./util");

const PORT = process.env.PORT || 4000;

const app = express();

// app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// TODO check return for both app.get and /vs*
app.get("/", (req, res) => {
  return res.json(notes);
});

app.get("/notes", (req, res) => {
  return res.json(notes);
});

app.listen(PORT, () => {});
