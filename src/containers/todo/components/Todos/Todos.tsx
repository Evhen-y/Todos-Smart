import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredTodos, getTodos } from '../../store/selectors';
import {todosActions} from "../../store/actions"
const Todos = () => {
  const dispatch =useDispatch()
  const filteredTodos = useSelector(getFilteredTodos());
  const todos = useSelector(getTodos());

  console.log('filteredTodos', filteredTodos);
  console.log('todos', todos);

  const handleChanch = (ev:any) => {
    
    dispatch(todosActions.TODOS_FILTER_SETTINGS.REQUEST({search:ev.target.value}, ()=>{
      dispatch(todosActions.FETCH_TODOS.REQUEST({}))
    }))
  }
  

  return (
    <>
      <input type="text" onChange={handleChanch} />
      
      {filteredTodos?.map(({ id, text }) => (
        <div key={id}>{text}</div>
      ))}
      
      {todos?.map(({ id, text }) => (
        <div key={id}>{text}</div>
      ))}
    </>
  );
};

export default Todos;
