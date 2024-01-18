import { TodoCounter } from ".././components/TodoCounter";
import { TodoSearch } from ".././components/TodoSearch";
import { TodoList } from ".././components/TodoList";
import { TodoItem } from ".././components/TodoItem";
import { CreateTodoButton } from ".././components/CreateTodoButton";
import Chart from ".././components/Chart";

function AppUI({
    completedTodos,
    totalTodos,
    pendingTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
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

export { AppUI };
