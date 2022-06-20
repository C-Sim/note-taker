const express = require("express");

const routes = require("./routes");

const logger = require("./util");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(logger);
app.use(express.json());
app.use(routes);

app.listen(PORT,() = {});


