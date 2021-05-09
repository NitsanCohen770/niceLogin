import * as actionTypes from './actionTypes';

export const onSignupInit = email => {
  return {
    type: actionTypes.SIGNUP_INIT,
    email,
  };
};

export const onLoginSuccess = userData => {
  return {
    type: actionTypes.LOGIN_SUCCESSS,
    email: userData.email,
    userId: userData.userId,
    token: userData.token,
  };
};

export const onLogout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const onLoginInit = () => {
  return {
    type: actionTypes.LOGIN_INIT,
  };
};
