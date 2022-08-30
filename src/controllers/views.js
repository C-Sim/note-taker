const path = require("path");

const renderHomepage = (req, res) => {
  const filePath = path.join(__dirname, "../../public/index.html");

  return res.sendFile(filePath);
};

const renderNotePage = (req, res) => {
  const filePath = path.join(__dirname, "../../public/notes.html");

  return res.sendFile(filePath);
};

module.exports = {
  renderHomepage,
  renderNotePage,
};
