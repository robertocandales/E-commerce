import { GET_PRODUCT } from '../Types/types';

export const getProductAction = (data) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PRODUCT,
      payload: data,
    });
  } catch (error) {
    console.log('error');
  }
};
