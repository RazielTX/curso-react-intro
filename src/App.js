import React from "react";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import "./App.css";
import Chart from "./components/Chart";

// const defaultTodos = [
//   { text: "Hacer los deberes de todos los dias", completed: true },
//   { text: "Los amigos", completed: false },
//   { text: "Leer", completed: true },
//   { text: "Vivir", completed: false },
//   { text: "Volver", completed: false },
//   { text: "Usar estados derivado", completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function useLocalStorage() {}

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");

  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const pendingTodos = totalTodos - completedTodos;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = newTodos[todoIndex].completed
      ? false
      : true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <div className="container">
        <div className="container--section container-section-counter">
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <Chart completedTodos={completedTodos} pendingTodos={pendingTodos} />
        </div>

        <div className="container-section container-section-todo">
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          <TodoList>
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
    </>
  );
}

export default App;
