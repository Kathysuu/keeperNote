import React, { useState, useImperativeHandle } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return { ...prevNote, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAdd(note);

    // set to blank after click add
    setNote({
      title: "",
      content: ""
    });

    // prevent from keeping refresh the page
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
