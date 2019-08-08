import {
  FETCH_USERS_TRY,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL
} from './constants'

export const fetchUsersTry = () => ({
  type: FETCH_USERS_TRY
})

export const fetchUsersSuccess = data => ({
  type: FETCH_USERS_SUCCESS,
  payload: data
})

export const fetchUsersFail = err => ({
  type: FETCH_USERS_FAIL,
  err
})
