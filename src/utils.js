const path = require("path");

const fs = require("fs");

const getData = () => {
  const filePath = path.join(__dirname, "../db/db.json");

  const data = fs.readFileSync(filePath, "UTF8");

  return JSON.parse(data);
};

const writeData = (data) => {
  const filePath = path.join(__dirname, "../db/db.json");

  fs.writeFileSync(filePath, JSON.stringify(data));
};

module.exports = {
  getData,
  writeData,
};
