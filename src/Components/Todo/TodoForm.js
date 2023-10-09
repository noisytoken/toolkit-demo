import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import { asyncAddTodo } from "../../redux/store";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    // dispatch(
    //   addTodo({
    //     id: crypto.randomUUID(),
    //     text: text,
    //     complete: false,
    //   })
    // );
    dispatch(
      asyncAddTodo({
        id: crypto.randomUUID(),
        text: text + " ##",
        complete: false,
      })
    );
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </form>
  );
};

export default TodoForm;
