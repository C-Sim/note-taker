const { getData, writeData } = require("../utils");

const { v4: uuidv4 } = require("uuid");

const getNotes = (req, res) => {
  // read from file (util)
  try {
    const notes = getData("notes");
    // return response - as array of objs
    return res.json(notes);
  } catch (error) {
    return res.status.json({ message: "Server Error" });
  }
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
  const data = getData("notes");

  // insert new note
  data.notes.push(note);

  // write to file (util)
  writeData("notes", data);

  // send response
  return res.json({
    message: "Note added successfully.",
  });
};

const deleteNote = (req, res) => {
  // Get id of note from req
  const { noteId } = req.params;

  // get all notes from file
  const { notes } = getData("notes");

  // filter list to all except those with matched id
  const filteredNotes = notes.filter((note) => note.id !== noteId);

  // write to file (util)
  writeData("notes", { notes: filteredNotes });

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
