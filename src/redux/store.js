import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer, { addTodo } from "./todoSlice";
import cartReducer from "./cartSlice";

function logger(store) {
  return function (next) {
    return function (action) {
      console.group(action);
      console.groupEnd();
      next(action);
    };
  };
}

function thunk(store) {
  return function (next) {
    return function (action) {
      if (typeof action === "function") {
        action(store.dispatch);
      } else {
        next(action);
      }
    };
  };
}

export function asyncAddTodo(todo) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(addTodo(todo));
    }, 2000);
  };
}

const rootReducer = combineReducers({
  todoReducer,
  cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, logger),
});

export default store;
