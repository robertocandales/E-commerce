import { POST_LOGIN } from '../Types/types';

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
