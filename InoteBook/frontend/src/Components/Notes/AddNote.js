import React, { useContext, useState } from "react";
import noteContext from "../../Context/Notes/NotesContext";

function AddNote() {
  const { addNote } = useContext(noteContext);
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    if (!note.title || !note.description || !note.tag) {
      setSuccessMessage("");
      setError("Fields cannot be empty");
      return;
    }

    const message = await addNote(note);
    if (message) {
      setSuccessMessage(message);
      setTimeout(() => {
        setSuccessMessage("");
      }, 1000);
      setError("");
    }
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-center">Add a Note</h2>
      <form className="my-3">
        <div className="form-group my-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            placeholder="Enter title"
            onChange={onChange}
            value={note.title}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Description"
            onChange={onChange}
            value={note.description}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            placeholder="Enter Tag"
            onChange={onChange}
            value={note.tag}
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}

        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}
        <button
          type="submit"
          className="btn btn-primary my-3"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNote;
