import { createActionTypes } from "../../../utils";
export const Actions_Types : string[] = ["FETCH_TODOS", "FETCH_TODO", "ADD_TODO", "EDIT_TODO", "REMOVE_TODO", "TODOS_FILTER_SETTINGS"];
export const todosActionsTypes = createActionTypes(Actions_Types);
