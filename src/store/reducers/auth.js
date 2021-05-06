import * as actionTypes from '../actions/actionTypes';

const initialState = {
  email: null,
  userId: null,
  token: null,
  isLoggedIn: false,
  isLoaidng: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_INIT:
      return {
        ...state,
        email: action.email,
      };
    case actionTypes.LOGIN_SUCCESSS:
      return {
        ...state,
        email: action.email,
        userId: action.userId,
        token: action.token,
        isLoggedIn: true,
        isLoading: false,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        email: null,
        isLoggedIn: false,
      };
    case actionTypes.LOGIN_INIT:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default reducer;
