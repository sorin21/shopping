import { combineReducers } from 'redux';
import productReducer from './productReducer';
import authUserReducer from './authUserReducer';

export default combineReducers({
  products: productReducer,
  user: authUserReducer
})