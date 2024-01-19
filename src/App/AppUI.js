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

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  pendingTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      <div className="container">
        <div className="container--section container-section-counter">
          <TodoCounter completed={completedTodos} total={totalTodos} loading={loading} />
          <Chart completedTodos={completedTodos} pendingTodos={pendingTodos} loading={loading} />
        </div>

        <div className="container-section container-section-todo">
          {loading ? (
            <>
              <TodoSearchLoading />
            </>
          ) : (
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
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
            {!loading && searchedTodos.length == 0 && <EmptyTodos />}

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
