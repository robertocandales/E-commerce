import { POST_LOGIN } from '../Types/types';

const initialState = {
  login: [],
};
export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case POST_LOGIN:
      return { ...state, login: action.payload };

    default:
      return state;
  }
}
