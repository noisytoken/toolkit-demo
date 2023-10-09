import React from "react";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  // const dispatch = useDispatch();

  console.log("todolist render");
  // console.log({ todos });
  return (
    <ul>
      {todos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </ul>
  );
};

export default TodoList;
