import { createSelector } from "reselect";
import { IUsersState } from "./interface";

interface IAppStateUsers {
    usersReducer: IUsersState;
}

const selectUsers = (state: IAppStateUsers) => state.usersReducer;

export const getUsers = () => createSelector(selectUsers, (state) => state.users);
export const getUser = () => createSelector(selectUsers, (state) => state.user);

export const getFilteredUsers = () => createSelector( selectUsers, (state) => {
    state.users.filter((user) => { 
        return Object.values(user)
        .filter((value) => !!value)
        .some((value) => { value.toLowerCase().trim().includes(state.filterSettings.search)

    })
})

} 


);

// ------

// const filterSettings = useSelector(myFilterSelector())
// const dispatch = useDispatch()

// const handleChange = (e.target.value) => {
//     dispatch(action.CONST_NAME.REQUEST({ search: e.target.value }, () => {
//         dispatch(action.FETCH_TODOS.REQUEST.REQUEST())
//     }))
    // dispatch(action.FETCH_TODOS.REQUEST.REQUEST())
// }

// input -> onChange => handleChange