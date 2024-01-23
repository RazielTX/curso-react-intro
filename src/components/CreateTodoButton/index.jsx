import { MdAdd } from "react-icons/md";

import "./CreateTodoButton.css";
import React from "react";
import { TodoContext } from "../../TodoContext";

function CreateTodoButton() {
  const { toggleModal } = React.useContext(TodoContext);

  return <MdAdd className="createTodoButton" onClick={() => toggleModal()} />;
}

export { CreateTodoButton };
