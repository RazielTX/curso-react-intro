import React from "react";

import { TodoCounter } from ".././components/TodoCounter";
import { TodoSearch } from ".././components/TodoSearch";
import { TodoList } from ".././components/TodoList";
import { TodoItem } from ".././components/TodoItem";
import { TodosLoading } from ".././components/TodosLoading";
import { TodoSearchLoading } from ".././components/TodoSearchLoading";
import { TodosError } from ".././components/TodosError";
import { EmptyTodos } from ".././components/EmptyTodos";
import { CreateTodoButton } from ".././components/CreateTodoButton";
import Chart from ".././components/Chart";
import { TodoContext } from "../TodoContext";
import { TodoModal } from "../components/TodoModal";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <div className="container">
        <div className="container--section container-section-counter">
          <TodoCounter />
          <Chart />
        </div>

        <div className="container-section container-section-todo">
          {loading ? (
            <>
              <TodoSearchLoading />
            </>
          ) : (
            <TodoSearch />
          )}

          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && <EmptyTodos />}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        </div>
        <CreateTodoButton />
      </div>

      {openModal && <TodoModal>Funcionalidad de agregar todo</TodoModal>}
    </>
  );
}

export { AppUI };
