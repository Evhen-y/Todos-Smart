import { all, fork } from "redux-saga/effects";
import { todosWatcherSaga } from "../../containers/todo/store/sagas";
import { usersWatchersSagas } from "../../containers/users/store/sagas";

const allSagas = [
  todosWatcherSaga,
   usersWatchersSagas
  // add other sagas
];

export default function* rootSagas() {
  yield all(allSagas.map(fork));
}
