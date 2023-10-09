import React from "react";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";

const CartList = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  // const dispatch = useDispatch();

  console.log("cartlist render");
  // console.log({ cart });
  return (
    <ul>
      {cart.map((cart) => {
        return <Cart key={cart.id} {...cart} />;
      })}
    </ul>
  );
};

export default CartList;
