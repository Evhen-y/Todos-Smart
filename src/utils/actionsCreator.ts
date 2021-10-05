import {TYPES} from './actionTypesCreator';
import {AnyAction} from 'redux'
export interface IActions {
    [key: string]: { [key: string]: (payload:Object, options?: Object, cb?: ()=>void ) => AnyAction;  };
  }

export const createAction = (aType: string[]): IActions => {
    const response: IActions = {};
    aType.forEach((aT) => {
      response[aT] = {};
      TYPES.forEach((t) => {
        response[aT][t] = (payload:Object, options?: Object, cb?: ()=>void )=>({
            type:`${aT}_${t}`,
            payload,
            options,
            cb


        })
      });
    });
    return response;
  };