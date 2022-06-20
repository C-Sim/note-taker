const { getData, writeData } = require("../util");

const getNotes = (req, res) => {
  // read from file (util)
  try {
    const notes = getData();
    // return response - as array of objs
    return res.json({ notes });
  } catch (error) {
    return res.status.json({ message: "Server Error" });
  }
};

const createNote = (req, res) => {
  // get payload from req

  // create id
  notes.id = uuid();
  // create new note
  // get all notes from file
  const notes = getData();
  // insert new note
  // write to file (util)
  writeData();
  // send response
};

const deleteNote = (req, res) => {
  // Get id of note from req
  // get all notes from file
  const notes = getData();
  // remove note by id
  // write to file (util)
  writeData();
  // send response
  // return object showing message: "success"
};

module.exports = {
  getNotes,
  createNote,
  deleteNote,
};
