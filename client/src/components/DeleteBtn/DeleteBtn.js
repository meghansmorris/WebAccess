import React from "react";

function DeleteBtn(props) {
    return (
      <span className="delete-btn text-right" {...props} role="button" style={{ float: "right", padding: "5px", cursor: "pointer" }}>
        ✗
      </span>
    );
  }
  
  export default DeleteBtn;