import { POST_LOGIN, POST_LOGOUT } from '../Types/types';

const initialState = {
  login: [],
};
export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case POST_LOGIN:
      return { ...state, login: action.payload };
    case POST_LOGOUT:
      return {};

    default:
      return state;
  }
}
