import {call, takeLatest, put } from 'redux-saga/effects';
import {todosActions, todosActionsTypes} from '.';
import * as axios from 'axios';

function* fetchTodosSaga({payload, cb}: ReturnType<any>){
    try{
        console.log(23525234234);
        
         // const data = yield call(axios.get('/todos?order=ASC&sortBy=CreatedAt'))
        const todos = [{
          id: 1,
          text: 'Text 001',
          createAt: new Date(),
          completed: false
        },{
            id: 2,
            text: 'Text 002',
            createAt: new Date(),
            completed: false
        }]
        yield put(todosActions.FETCH_TODOS.SUCCESS(todos))
    }catch (err){
        yield put(todosActions.FETCH_TODOS.FAILURE(err as Object))
    }finally{
        cb?.();
    }
}

function* fetchTodoSaga({payload, cb}: ReturnType<any>){
    try{
          // http://localhost:300/api/todos/124234
    // const data = yield call(axios.get(`/todos/${payload.id}`))
        const todo = [{
            id: 3,
            text: 'Text 003',
            createAt: new Date(),
            completed: false
          }]
          yield put(todosActions.FETCH_TODO.SUCCESS(todo))
    }catch (err){
        yield put(todosActions.FETCH_TODO.FAILURE(err as Object))
    }finally{
        cb?.();
    }
}

function* addTodoSaga({payload, cb}: ReturnType<any>){
    try{
         // const data = yield call(axios.post(`/todos`, payload))
        const newTodo = { 
            id: 4,
            text: 'Text 004',
            createAt: new Date(),
            completed: false
          }
          yield put(todosActions.AAD_TODO.SUCCESS(newTodo))
    }catch (err){
        yield put(todosActions.AAD_TODOS.FAILURE(err as Object))
    }finally{
        cb?.();
    }
}

function* editTodoSaga({payload, cb}: ReturnType<any>){
    try{
           // const { id, ...rest } = payload
           // const data = yield call(axios.put(`/todos/${id}`, rest))
        const updateTodo = [{
            id: 44,
            text: 'Text 44',
            createAt: new Date(),
            completed: false
          }]
          yield put(todosActions.EDIT_TODO.SUCCESS(updateTodo))
        
    }catch (err){
        yield put(todosActions.EDIT_TODOS.FAILURE(err as Object))
    }finally{
        cb?.();
    }
}

function* removeTodoSaga({payload, cb}: ReturnType<any>){
    try{
        const removeTodo = 5;
        yield put(todosActions.EDIT_TODO.SUCCESS(removeTodo))
    }catch (err){
        yield put(todosActions.FETCH_TODOS.FAILURE(err as Object))
    }finally{
        cb?.();
    }
}

function* applyTodosFilterSaga({payload, cb}:ReturnType<any>){
    cb()
}

export const todosWatcherSaga  = function* () {
    yield takeLatest(todosActionsTypes.FETCH_TODOS.REQUEST, fetchTodosSaga);
    yield takeLatest(todosActionsTypes.FETCH_TODO.REQUEST, fetchTodoSaga);
    yield takeLatest(todosActionsTypes.ADD_TODO.REQUEST, addTodoSaga);
    yield takeLatest(todosActionsTypes.EDIT_TODO.REQUEST, editTodoSaga);
    yield takeLatest(todosActionsTypes.REMOVE_TODO.REQUEST, removeTodoSaga);
    yield takeLatest(todosActionsTypes.TODOS_FILTER_SETTINGS.REQUEST, applyTodosFilterSaga)
}