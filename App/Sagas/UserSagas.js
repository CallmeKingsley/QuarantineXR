import UserRedux, { UserSelector } from '../Redux/UserRedux'
import { select, put } from 'redux-saga/effects'

export function * addTodo (action) {
  try {
    yield put(UserRedux.saveTodo(action.name))
    const firstName = yield select(UserSelector.getUserFirst)
    console.log(firstName)
  } catch (e) {
    console.log(e)
    console.log('error')
  }
}
