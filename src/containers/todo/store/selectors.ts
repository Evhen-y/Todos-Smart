import { createSelector } from "reselect";
import { ITodosState } from "@containers/";

interface IAppSstate {
  todosReducer: ITodosState;
}

const selectTodos = (state: IAppSstate) => state.todosReducer;


export const getTodos = () => createSelector(selectTodos, (state) => state.todos);
export const getTodo = () => createSelector(selectTodos, (state) => state.todo);
export const getFilteredTodos = () => createSelector(selectTodos,  (state) => {
   state.todos.filter((todo)=> todo.text.includes(state.filterSettings.search))})

  //  .toLowerCase().trim()
  // .toLowerCase().trim()