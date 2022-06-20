const express = require("express");

const routes = require("./routes");

const logger = require("./util");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(logger);
app.use(express.json());
app.use(routes);

app.listen(PORT,() = {});

// routes
// const { Router } = require("express");

// const notes = require("./routes/notes");

// const router = Router();

// router.use("/routes", notes);

// module.exports = router;
