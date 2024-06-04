import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removetodo, deleteAll } from "./todoSlice";

const TodoList = () => {
  const [text, setText] = useState("");
  const todosall = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const addTodos = () => {
    if (text.trim().length > 0) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>todolist</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodos}> Add todo </button>
      <div>
        {todosall.map((eachtodo, index) => (
          <ul key={index}>
            <i
              style={{ display: "flex", justifyContent: "space-around" }}
              key={index}
            >
              {eachtodo}

              <button onClick={() => dispatch(removetodo(index))}>
                delete todo
              </button>
            </i>
          </ul>
        ))}
      </div>
      <button onClick={() => dispatch(deleteAll())}>delete all</button>
    </div>
  );
};

export default TodoList;
