import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  /* const { data: todos = [], isLoading } = useGetTodosQuery(); */
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);
  const nextTodo = () => {
    setTodoId(todoId + 1);
  };
  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>Loading: {isLoading ? "True" : "False"}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={prevTodo}>
        <span>Prev Todo</span>
      </button>
      <button onClick={nextTodo}>
        <span>Next Todo</span>
      </button>
      {/* <ul>
        {todos?.map((todo: any) => {
          return (
            <li key={todo.id}>
              <strong>{todo.completed ? "Done" : "Pending"}&nbsp;</strong>
              <span>{todo.title}</span>
            </li>
          );
        })}
      </ul> */}
    </>
  );
};
