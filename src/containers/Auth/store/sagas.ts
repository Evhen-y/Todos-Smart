import {createActionAuth, createConstansAuth} from '.';
import{call, put, takeLatest, select} from 'redux-saga/effects';
import * as axios from "axios"

//  function* fetchUsersSaga ({payload, cb}:ReturnType<any>){
//     try{
//         // const { filterSettings } = yield select(myFilterSelector())
//         //    const data = yield call(axios.get('/users?order=ASC&sortBy=CreatedAt'))
//         const users =  [{
//                 id: 1,
//                 name: 'ivan',
//                 lastName: 'sidirov',
//                 email: "uhu@gmail.com",
//                 createAt: new Date(),
//                 isActive: true,
//                 avatar:  null,
//         }, {
//             id: 2,
//             name: 'Serg',
//             lastName: 'Cool',
//             email: "rrrrrhu@gmail.com",
//             createAt: new Date(),
//             isActive: true,
//             avatar:  null
//         }
//         ];
//         yield put(createActionUsers.FETCH_USERS.SUCCESS(users));
//     }catch (err){
//         yield put(createActionUsers.FETCH_USERS.FAILURE(err as Object));
//     }finally{
//         cb?.();
//     }
// }

// function* fetchUserSaga ({payload, cb}:ReturnType<any>){
//     try{
//           // http://localhost:300/api/todos/124234
//     // const data = yield call(axios.get(`/users/${payload.id}`))
//         const user =
//             [ {
//             id: 3,
//             name: 'Sasha',
//             lastName: 'Greck',
//             email:"SSSSSSShu@gmail.com",
//             createAt: new Date(),
//             isActive: true,
//             avatar:  null
//             }
//         ];
//         yield put(createActionUsers.FETCH_USER.SUCCESS(user));
//     }catch (err){
//         yield put(createActionUsers.FETCH_USER.FAILURE(err as Object));
//     }finally{
//         cb?.()
//     }
// }

// function* addUserSaga ({payload, cb}:ReturnType<any>){
//     try{
//         // const data = yield call(axios.post(`/users`, payload)))
//         const user = [
//              {      
//             id: 4,
//             name: 'Jon',
//             lastName: 'Boby',
//             email:"SSSSu@gmail.com",
//             createAt: new Date(),
//             isActive: true,
//             avatar:  null

//         }
//         ];
//         yield put(createActionUsers.ADD_USER.SUCCESS(user));
//     }catch (err){
//         yield put(createActionUsers.ADD_USER.FAILURE(err as Object));
//     }finally{
//         cb?.()
//     }
// }

// function* editUserSaga ({payload, cb}:ReturnType<any>){
//     try{
//           // const { id, ...rest } = payload
//     // const data = yield call(axios.put(`/users/${id}`, rest))
//         const user = [
//              {
//                 id: 4,
//                 name: 'Dake',
//                 lastName: 'Borouze',
//                 email:"efSu@gmail.com",
//                 createAt: new Date(),
//                 isActive: true,
//                 avatar:  null
//         }
//         ];
//         yield put(createActionUsers.EDIT_USER.SUCCESS(user));
//     }catch (err){
//         yield put(createActionUsers.EDIT_USER.FAILURE(err as Object));
//     }finally{
//         cb?.()
//     }
// }

// function* removeUserSaga ({payload, cb}:ReturnType<any>){
//     try{
//         // const data = yield call(axios.delete(`/users/${payload.id}`))
//         const removeUserId = 4;
//         yield put(createActionUsers.REMOVE_USER.SUCCESS(removeUserId));
//     }catch (err){
//         yield put(createActionUsers.REMOVE_USER.FAILURE(err as Object));
//     }finally{
//         cb?.()
//     }
// }
// function* applyUsersFilterSaga({ payload, cb }:ReturnType<any>) {
  
//     cb()
// }

// export const usersWatchersSagas = function* ()  {
//     yield takeLatest(createConstansUsers.FETCH_USERS.REQUEST, fetchUsersSaga );
//     yield takeLatest(createConstansUsers.FETCH_USER.REQUEST, fetchUserSaga );
//     yield takeLatest(createConstansUsers.ADD_USER.REQUEST, addUserSaga );
//     yield takeLatest(createConstansUsers.EDIT_USER.REQUEST, editUserSaga );
//     yield takeLatest(createConstansUsers.REMOVE_USER.REQUEST, removeUserSaga );
//     yield takeLatest(createConstansUsers.USERS_FILTER_SETTINGS.REQUEST, applyUsersFilterSaga)
   
// }