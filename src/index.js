const express = require("express");

const path = require("path");

const routes = require("./routes");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);

// TODO check return for both app.get and /vs*
app.get("/", (req, res) => {
  return res.json(notes);
});

app.get("/notes", (req, res) => {
  return res.json(notes);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
