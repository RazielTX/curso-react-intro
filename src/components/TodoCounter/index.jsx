import React from "react";

import { TodoContext } from "../../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { loading, completedTodos, totalTodos } = React.useContext(TodoContext);

  return loading ? (
    <h1>Cargando tus TODOs</h1>
  ) : totalTodos === completedTodos ? (
    <h1>Has completado todos los TODOs. ¡Felicitaciones!</h1>
  ) : (
    <h1>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h1>
  );
}

export { TodoCounter };
