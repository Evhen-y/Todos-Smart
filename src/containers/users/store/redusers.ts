
import {IUsersState, IUser} from "./interface";
 import {Reducer as IReducer} from 'redux';
 import {createConstansUsers} from './constants';
 import { EOrder } from "@shared/interface";
 
const initialstateUser:IUsersState = {
    error: null,
    loading: false,
    users: [],
    user: null,
    filterSettings: {
      search: "",
      order: EOrder.ASC,
      sortBy: "createAt",
      limit: 20,
      skip: 0,
    }
}

export const usersReducer:IReducer<IUsersState> = (state : IUsersState = initialstateUser , action ) => {
 
 
   switch(action.type){
     case createConstansUsers.FETCH_USERS.REQUEST:
     case createConstansUsers.FETCH_USER.REQUEST:
     case createConstansUsers.ADD_USER.REQUEST:
     case createConstansUsers.EDIT_USER.REQUEST:
     case createConstansUsers.REMOVE_USER.REQUEST:
        return {... state, loading:true};
        
     case createConstansUsers.FETCH_USERS.SUCCEESS:
        return {...state, loading: false, users: action.payload};
        console.log('USER SECCESS');
       
     case createConstansUsers.FETCH_USER.SUCCEESS:
        return {...state, loading: false, user: action.payload};

     case createConstansUsers.ADD_USER.SUCCEESS:
        return {...state, loading: false, users : [...state.users].concat(action.payload)};

     case createConstansUsers.EDIT_USER.SUCCEESS:
        return {...state, loading: false, users : [...state.users].map(user =>user.id ===action.payload.id ? action.payload : user) };  

     case createConstansUsers.REMOVE_USER.SUCCEESS:
        return {...state, loading: false, users : [...state.users].filter(user => user.id !==action.payload.id) };
        
        

     case createConstansUsers.FETCH_USERS.FAILURE:
     case createConstansUsers.FETCH_USER.FAILURE:
     case createConstansUsers.ADD_USER.FAILURE: 
     case createConstansUsers.EDIT_USER.FAILURE:
     case createConstansUsers.REMOVE_USER.FAILURE:
        return {...state, loading: false, error: action.payload};

     case createConstansUsers.USERS_FILTER_SETTINGS.REQUEST:
     return {...state,  filterSettings: { ...state.filterSettings, search: action.payload.search } }

     default :
        return state;
    }
};
