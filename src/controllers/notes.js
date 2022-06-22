const { getData, writeData } = require("../utils");

const { v4: uuidv4 } = require("uuid");

const getNotes = (req, res) => {
  // read from file (util)

  const notes = getData();
  // return response - as array of objs
  return res.json(notes);
};

const createNote = (req, res) => {
  // get payload from req
  const { title, text } = req.body;

  // create id
  const id = uuidv4();

  // create new note
  const note = {
    title,
    text,
    id,
  };

  // get all notes from file
  const notes = getData();

  console.log(notes);
  console.log(note);

  // insert new note
  notes.push(note);

  // write to file (util)
  writeData(notes);

  // send response
  return res.json({
    message: "Note added successfully.",
  });
};

const deleteNote = (req, res) => {
  // Get id of note from req
  const { id } = req.params;

  console.log(id);

  // get all notes from file
  const notes = getData();

  // filter list to all except those with matched id
  const filteredNotes = notes.filter((note) => note.id !== id);

  console.log(filteredNotes);

  // write to file (util)
  writeData(filteredNotes);

  // send response
  return res.json({
    message: "Note deleted successfully.",
  });
};

module.exports = {
  getNotes,
  createNote,
  deleteNote,
};
