import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const CartForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      addProduct({
        id: crypto.randomUUID(),
        text: text,
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

export default CartForm;
