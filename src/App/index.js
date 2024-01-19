import React from "react";

import "./App.css";

import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: "Hacer los deberes de todos los dias", completed: true },
//   { text: "Los amigos", completed: false },
//   { text: "Leer", completed: true },
//   { text: "Vivir", completed: false },
//   { text: "Volver", completed: false },
//   { text: "Usar estados derivado", completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const pendingTodos = totalTodos - completedTodos;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

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
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      pendingTodos={pendingTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
