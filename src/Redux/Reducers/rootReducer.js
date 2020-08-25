import { combineReducers } from 'redux';
import getProductReducer from './getProductReducer';
import LoginReducer from './LoginReducer';

export const rootReducer = combineReducers({
  product: getProductReducer,
  login: LoginReducer,
});
