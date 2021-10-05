import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createActionUsers} from '../../store/actions';
import {getUsers} from '../../store/selectors'

const Users = () => {
//    const dispatch = useDispatch()
   const users = useSelector(getUsers())
   console.log('usr', users)
    // dispatch(createActionUsers.FETCH_USERS.REQUEST({}))
    return(
        <> 
        {users?.map(({name, id})=>(
        <div key={id}>{name}</div>
        ))}
        </>
    )
}
export default Users