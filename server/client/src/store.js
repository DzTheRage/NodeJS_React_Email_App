import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import authReducer from './services/auth/authReducer';

export default createStore(
  combineReducers({ auth: authReducer }),
  {},
  applyMiddleware(reduxThunk, logger)
);
