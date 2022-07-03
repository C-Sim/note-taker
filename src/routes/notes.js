const { Router } = require("express");

const { getNotes, createNote, deleteNote } = require("../controllers/notes");

const router = Router();

router.get("/", getNotes);
router.post("/", createNote);
router.delete("/:id", deleteNote);

module.exports = router;
