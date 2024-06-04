import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: []
  },
  reducers: {
    addTodo(state, action) {
      state.items.push(action.payload);
    },
    removetodo(state, action){
      state.items.splice(action.payload, 1);
    },
    deleteAll(state) {
        state.items=[]
    },
  },
});

export const { addTodo, removetodo,deleteAll} = todoSlice.actions;
export default todoSlice.reducer;
