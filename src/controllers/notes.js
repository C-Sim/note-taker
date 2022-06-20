const getNotes = () => {
  // read from file (util)
  // return response
};

const createNote = () => {
  // get payload from req
  // create id
  // create new note
  // get all notes from file
  // insert new note
  // write to file (util)
  // send response
};

const deleteNote = () => {
  // Get id of note from req
  // get all notes from file
  // remove note by id
  // write to file (util)
  // send response
  // return object showing message: "success"
};

module.exports = {
  getNotes,
  createNote,
  deleteNote,
};
