import React from "react";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import "./App.css";
import Chart from "./components/Chart";

const defaultTodos = [
  { text: "Hacer los deberes de todos los dias", completed: true },
  { text: "Los amigos", completed: false },
  { text: "Leer", completed: true },
  { text: "Vivir", completed: false },
  { text: "Volver", completed: false },
  { text: "Usar estados derivado", completed: true },
];

// Implementar https://www.chartjs.org/

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const pendingTodos = totalTodos - completedTodos;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  console.log(searchValue);

  return (
    <>
      <div className="container">
        <div className="container--section container-section--counter">
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <Chart completedTodos={completedTodos} pendingTodos={pendingTodos} />
        </div>

        <div className="container-section container-section--todo">
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
