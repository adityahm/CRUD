import {
  FETCH_USERS_TRY,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL
} from './constants';

const initialState = {
  fetching: false,
  fetchStatus: '',
  data: [],
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_TRY:
      return {
        ...initialState,
        fetching: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetchStatus: 'SUCCESS',
        data: action.payload.users
      };

    case FETCH_USERS_FAIL:
      return {
        ...state,
        fetching: false,
        fetchStatus: 'FAIL',
        error: action.err
      };

    default:
      return initialState;
  }
};
