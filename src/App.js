import { Provider } from "react-redux";
import TodoList from "./Components/TodoList";
import store from "./Components/store";

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
