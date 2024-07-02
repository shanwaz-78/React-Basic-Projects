import React, { useState, useContext, useRef } from "react";
import noteContext from "../../Context/Notes/NotesContext";
import NotesItem from "./NotesItem";
import AddNote from "../../Components/Notes/AddNote";

function Notes() {
  const { notes, successMessage } = useContext(noteContext);
  const [updatedValue, setUpdatedValue] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const ref = useRef(null);

  const updateNote = (note) => {
    ref.current.click();
  };

  const onChange = (e) => {
    setUpdatedValue({ ...updatedValue, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote />

      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        ref={ref}
        style={{ display: "none" }}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
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
                    value={updatedValue.title}
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
                    value={updatedValue.description}
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
                    value={updatedValue.tag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      <div className="container my-3 row d-flex justify-content-center">
        {notes.map(({ _id, title, description, tag }) => (
          <NotesItem
            title={title}
            description={description}
            tag={tag}
            key={_id}
            id={_id}
            updateNote={updateNote}
          />
        ))}
      </div>
    </>
  );
}

export default Notes;
