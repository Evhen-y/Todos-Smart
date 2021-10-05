import {ITodo, ITodosState} from './interfaces';
import {Reducer as IReducer} from 'redux';
import {todosActionsTypes} from './constants';
import { EOrder } from "@shared/interface";
const initialstate:ITodosState = {
    error: null,
    loading: false,
    todos: [],
    todo: null,
    filterSettings: {
      search: "",
      order: EOrder.ASC,
      sortBy: "createAt",
      limit: 20,
      skip: 0,
    }
}

export const todosReducer:IReducer<ITodosState> = (state : ITodosState = initialstate , action ) => {
 console.log('----------------', action.type, todosActionsTypes.FETCH_TODOS.SUCCESS);
 
   switch(action.type){
     case todosActionsTypes.FETCH_TODOS.REQUEST:
     case todosActionsTypes.FETCH_TODO.REQUEST:
     case todosActionsTypes.ADD_TODO.REQUEST:
     case todosActionsTypes.EDIT_TODO.REQUEST:
     case todosActionsTypes.REMOVE_TODO.REQUEST:
        return {... state, loading:true};
        
     case todosActionsTypes.FETCH_TODOS.SUCCESS:
        console.log(7898797897978);
        
        return {...state, loading: false, todos: action.payload};

     case todosActionsTypes.FETCH_TODO.SECCESS:
        return {...state, loading: false, todo: action.payload};

     case todosActionsTypes.ADD_TODO.SECCESS:
        return {...state, loading: false, todos : [...state.todos].concat(action.payload)};

     case todosActionsTypes.EDIT_TODO.SECCESS:
        return {...state, loading: false, todos : [...state.todos].map(todo =>todo.id ===action.payload.id ? action.payload : todo) };  

     case todosActionsTypes.REMOVE_TODO.SECCESS:
        return {...state, loading: false, todos : [...state.todos].filter(todo => todo.id !==action.payload.id) }; //??????????? 

     case todosActionsTypes.FETCH_TODOS.FAILURE:
     case todosActionsTypes.FETCH_TODO.FAILURE:
     case todosActionsTypes.ADD_TODO.FAILURE: 
     case todosActionsTypes.EDIT_TODO.FAILURE:
     case todosActionsTypes.REMOVE_TODO.FAILURE:
        return {...state, loading: false, error: action.payload};

      case todosActionsTypes.TODOS_FILTER_SETTINGS.REQUEST: 
      console.log('action.payload ->', action.payload);
      
      return {...state,  filterSettings: { ...state.filterSettings, search: action.payload.search } } 

     default :
        return state;
    }
};

