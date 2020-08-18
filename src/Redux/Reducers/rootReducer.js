import { combineReducers } from 'redux';
import getProductReducer from './getProductReducer';

export const rootReducer = combineReducers({
  product: getProductReducer,
});
