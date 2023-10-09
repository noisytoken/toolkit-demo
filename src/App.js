import CartForm from "./Components/Cart/CartForm";
import CartList from "./Components/Cart/CartList";
import TodoForm from "./Components/Todo/TodoForm";
import TodoList from "./Components/Todo/TodoList";

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
      <CartForm />
      <CartList />
    </div>
  );
}

export default App;
