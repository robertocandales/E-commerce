import { POST_LOGIN, POST_LOGOUT } from '../Types/types';

export const LoginAction = (data) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_LOGIN,
      payload: data,
    });
  } catch (error) {
    console.log('error');
  }
};

export const LogoutAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_LOGOUT,
      payload: '',
    });
  } catch (error) {
    console.log('error');
  }
};
