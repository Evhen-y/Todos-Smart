 import { connectRouter, RouterState } from "connected-react-router";
// react-router /todos/123/test/123?qwe=qweqw
// react-router-dom (core)
// connected-react-router
import { combineReducers, CombinedState, AnyAction } from "redux";
import { History, createBrowserHistory } from "history";
import {ITodosState} from '../../containers/todo/store/interfaces'
import { todosReducer } from "../../containers/todo/store";
import {usersReducer } from '../../containers/users/store/redusers'
import {IUsersState} from "../../containers/users/store/interface"
import { IAppSstate } from "../interface";
import {authReducer} from "../..//containers/Auth"
export const history = createBrowserHistory()

type TReducer = CombinedState<any>;

//  type TRootReducer =
//   | CombinedState<{ todosReducer: ITodosState; usersReducer ?: IUsersState; router: RouterState<unknown> }>
//    | undefined;

export default (history: History) => {
  const rootReducer = combineReducers({
    todosReducer,
    usersReducer,
    authReducer,
     router: connectRouter(history)
    // Other reducers
  });

  return (state: TReducer | undefined, action: AnyAction) => {
    return rootReducer(state , action);
  };
};
