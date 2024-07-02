import React, { useContext } from "react";
import { Pen, Trash } from "phosphor-react";
import noteContext from "../../Context/Notes/NotesContext";

function NotesItem({ id, title, description, tag, updateNote }) {
  const { deleteNote } = useContext(noteContext);
  const { ref } = useContext(noteContext);

  return (
    <div className="card col-md-3 m-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Pen
          size={22}
          className="mx-2"
          style={{ cursor: "pointer" }}
          onClick={() => updateNote({ id, title, description, tag })}
        />
        <Trash
          size={22}
          className="mx-2"
          style={{ cursor: "pointer" }}
          onClick={() => deleteNote(id)}
        />
      </div>
    </div>
  );
}

export default NotesItem;
