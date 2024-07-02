import services from "../services/index.js";
const getAllNotesController = (req, res) => {
  services.notesServices.getAllNotesService(req, res);
};

const addNotesController = (req, res) => {
  services.notesServices.addNotesService(req, res);
};

const updateNoteController = (req, res) => {
  services.notesServices.updateNoteService(req, res);
};

const deleteNoteController = (req, res) => {
  services.notesServices.deleteNoteService(req.params.id, res);
};
export default {
  getAllNotesController,
  addNotesController,
  updateNoteController,
  deleteNoteController,
};
