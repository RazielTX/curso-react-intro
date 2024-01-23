import React from "react";
import ReactDOM from "react-dom";

import './TodoModal.css';

function TodoModal({ children }) {
  return ReactDOM.createPortal(
    <div className="TodoModal">{children}</div>,
    document.getElementById("todoModal")
  );
}

export { TodoModal };
