import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { resolve } from 'url';
import { TodosContainer, todosActions, UsersContainer, createActionUsers,  } from "./containers";
import {LogInContainer} from "./containers/Auth/"

console.log(todosActions);

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(todosActions.FETCH_TODOS.REQUEST({}))
        dispatch(createActionUsers.FETCH_USERS.REQUEST({}))
    }, [dispatch])
    
    

    return (
        <div>
             <LogInContainer/>   
             <TodosContainer />
             <UsersContainer/>
        </div>
   
    )
};

export default App;
