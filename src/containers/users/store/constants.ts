import { createActionTypes} from '../../../utils/actionTypesCreator'
// todo -> add user filter CONST_NAME
export const ACTION_TYPE_USER: string[] = ["FETCH_USERS", "FETCH_USER", "ADD_USER", "EDIT_USER", "REMOVE_USER", "USERS_FILTER_SETTINGS" ]

export const createConstansUsers = createActionTypes(ACTION_TYPE_USER)

