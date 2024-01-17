import "../styles/TodoCounter.css";

function TodoCounter({ total, completed }) {
  return total == completed ?
  (
    <h1>
      Has completado todos los TODOs. ¡Felicitaciones!
    </h1>
  )
  : (
    <h1>
      Has completado {completed} de {total} TODOs
    </h1>
  );
}

export { TodoCounter };
