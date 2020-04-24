import { takeLatest, all } from 'redux-saga/effects'

/* ------------ Types ----------- */
import { UserType } from '../Redux/UserRedux'

/* ------------ sagas ----------- */
import { addTodo } from './UserSagas'

/* ------------ sagas ----------- */
export default function * root () {
  yield all([
    takeLatest(UserType.ADD_TODO, addTodo)
  ])
}
