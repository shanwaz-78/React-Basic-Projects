import React, { useState, useEffect, useCallback } from "react";
import NoteContext from "./NotesContext";
import axios from "axios";

const NoteState = ({ children }) => {
  const HOST = `http://localhost:8081`;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzZjMzU3ODM3OTUzZTE4NThkYWFmZiIsImRhdGEiOnsibmFtZSI6ImhhbGltIiwiZW1haWwiOiJtb2hhbW1lZC5zaGFud2F6Nzg5ODlAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NCJ9LCJpYXQiOjE3MTkwNTkyODh9.flQr2N83lyXk7NQA5KYPILGElX7hTSQjuex81k_2sYs";

  const requestHeader = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const [notes, setNotes] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const getAllNotes = async () => {
    try {
      const response = await axios.get(
        `${HOST}/api/notes/get-notes`,
        requestHeader
      );
      setNotes(response.data);
    } catch (error) {
      console.log(`Error at getAllNotes:`, error.message);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  const addNote = async (newNote) => {
    try {
      const response = await axios.post(
        `${HOST}/api/notes/add-note`,
        newNote,
        requestHeader
      );
      const { message } = response.data;

      const note = {
        ...newNote,
        _id: response.data.createdNote._id,
        user: response.data.createdNote.user,
        date: response.data.createdNote.date,
        createdAt: response.data.createdNote.createdAt,
        updatedAt: response.data.createdNote.updatedAt,
        __v: response.data.createdNote.__v,
      };

      setNotes((prevNotes) => [...prevNotes, note]);
      return message;
    } catch (error) {
      console.log("Error at NoteState/addNote:", error.message);
      return "Failed to add note";
    }
  };

  const editNote = useCallback(
    async ({ id, title, description, tag }) => {
      try {
        const updatedNote = await axios.put(
          `${HOST}/api/notes/update-note/${id}`,
          { title, description, tag },
          requestHeader
        );

        setNotes((prevNotes) =>
          prevNotes.map((note) =>
            note._id === id ? { ...note, ...updatedNote.data } : note
          )
        );
      } catch (error) {
        console.log("Error at NoteState/editNote:", error.message);
      }
    },
    [HOST, requestHeader]
  );

  const deleteNote = useCallback(
    async (id) => {
      try {
        const response = await axios.delete(
          `${HOST}/api/notes/delete-note/${id}`,
          requestHeader
        );
        const { message } = response.data;

        setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
        setSuccessMessage(message);

        setTimeout(() => {
          setSuccessMessage("");
        }, 1000);
      } catch (error) {
        console.log(`Error at NoteState/deleteNote:`, error.message);
      }
    },
    [HOST, requestHeader]
  );

  return (
    <NoteContext.Provider
      value={{ notes, addNote, editNote, deleteNote, successMessage }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
