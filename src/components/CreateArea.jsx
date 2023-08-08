import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={props.note.title}
            onChange={props.onChangeHandle}
          />
        )}

        <textarea
          name="content"
          value={props.note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onChange={props.onChangeHandle}
          onClick={expand}
        />
        {isExpanded && (
          <Zoom in={true}>
            <Fab onClick={props.onClickHandle}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
