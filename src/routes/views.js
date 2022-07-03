const { Router } = require("express");

const { renderHomepage, renderNotePage } = require("../controllers/views");

const router = Router();

// TODO check /vs*
router.get("/", renderHomepage);

router.get("/notes", renderNotePage);

module.exports = router;
