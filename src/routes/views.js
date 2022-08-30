const { Router } = require("express");

const { renderHomepage, renderNotePage } = require("../controllers/views");

const router = Router();

router.get("/notes", renderNotePage);
router.get("/*", renderHomepage);

module.exports = router;
