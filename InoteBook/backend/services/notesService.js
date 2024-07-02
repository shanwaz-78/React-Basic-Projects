import NotesModel from "../models/Notes.js";
import { getAllData, insertData } from "../utils/globalUtil.js";

const getAllNotesService = async (data, res) => {
  try {
    const userNotes = await getAllData(NotesModel, data.user.id);
    if (userNotes.length === 0) {
      return res.status(404).send({ message: "No notes found for this user." });
    }
    return res.status(200).send(userNotes);
  } catch (error) {
    console.error(`Error at getAllNotesService:`, error);
    return res.status(500).send({
      message: "An error occurred while retrieving the notes",
      error: error.message,
    });
  }
};

const addNotesService = async (data, res) => {
  const { title, description, tag } = data.body;
  const { id } = data.user;

  if (!title || !description || !tag) {
    return res.status(400).send({
      message:
        "Missing required fields: title, description, and tag are required.",
    });
  }

  const notesData = {
    title,
    description,
    tag,
    user: id,
  };

  try {
    const createdNote = await insertData(NotesModel, notesData);
    return res.status(200).send({
      message: "Note created successfully.",
      createdNote,
    });
  } catch (error) {
    console.error("Error while creating note:", error);
    return res.status(500).send({
      message: "An error occurred while creating the note.",
      error: error.message,
    });
  }
};

const updateNoteService = async (data, res) => {
  const { title, description, tag } = data.body;

  if (!title || !description || !tag) {
    return res.status(400).send({
      message:
        "Invalid input values. Please provide a title, description, and tag.",
    });
  }

  try {
    const userNote = await NotesModel.findById(data.params.id);
    if (!userNote) {
      return res.status(404).send({ message: "Note not found." });
    }

    if (userNote.user.toString() !== data.user.id) {
      return res
        .status(403)
        .send({ message: "UnAuthorized to update this note." });
    }

    const updatedNote = await NotesModel.findByIdAndUpdate(
      data.params.id,
      { $set: data.body },
      { new: true }
    );

    return res
      .status(200)
      .send({ message: "Note updated successfully.", updatedNote });
  } catch (error) {
    console.error("Error at updateNoteService:", error);
    return res
      .status(500)
      .send({ message: "Internal server error.", error: error.message });
  }
};

const deleteNoteService = async (id, res) => {
  try {
    const isNoteExist = await NotesModel.findById(id);

    if (!isNoteExist) {
      return res
        .status(404)
        .send({ message: `Not found any note at given id` });
    }

    if (isNoteExist._id.toString() !== id) {
      return res.status(401).send({ message: `Not Allowed to delete note` });
    }

    const deletedNote = await NotesModel.findByIdAndDelete(id);
    console.log(`deltedUser : ${deletedNote}`);
    return res
      .status(200)
      .send({ message: `Note Deleted Successfully`, deletedNote });
  } catch (error) {
    console.error("Error at deleteNoteService:", error);
    return res
      .status(500)
      .send({ message: "Internal server error.", error: error.message });
  }
};
export default {
  getAllNotesService,
  addNotesService,
  updateNoteService,
  deleteNoteService,
};

``;
