import { ITodosState } from "../../containers/todo/store/interfaces";
import {  IUsersState } from "../../containers/users/store/interface";
import {  IAuthState } from "../../containers/Auth/store/interface";
export enum EOrder {
  ASC = "ASC",
  DESC = "DESC",
}

export interface IAppSstate {
  todosReducer: ITodosState;
  usersReducer?: IUsersState;
  authReducer?:IAuthState;
}