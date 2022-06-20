const path = require("path");

const fs = require("fs");

const filePath = path.join(__dirname, "../db", db.json);

const getData = () => {
  const data = fs.readFileSync(filePath, "UTF8");

  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data));
};

const logger = (req, res, next) => {
  const method = req.method;
  const path = req.path;
  next();
};

module.exports = {
  getData,
  writeData,
  logger,
};
