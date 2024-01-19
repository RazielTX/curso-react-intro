import "./TodoCounter.css";

function TodoCounter({ total, completed, loading }) {
  return loading ? (
    <h1>Cargando tus TODOs</h1>
  ) : total === completed ? (
    <h1>Has completado todos los TODOs. ¡Felicitaciones!</h1>
  ) : (
    <h1>
      Has completado {completed} de {total} TODOs
    </h1>
  );
}

export { TodoCounter };
