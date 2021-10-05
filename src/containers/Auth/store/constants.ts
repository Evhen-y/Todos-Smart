import { createActionTypes} from '../../../utils/actionTypesCreator'
export const ACTION_TYPE_AUTH: string[] = ["SIGN_UP", "SIGN_IN", "RESET_PASSWORD", "FORGOT_PASSWORD", "ACCOUNT_ACTIVATION", "SIGN_OUT" ]

export const createConstansAuth = createActionTypes(ACTION_TYPE_AUTH)

