import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import HomeReducer from '../app/reducers/HomeReducer';
import LoginReducer from '../app/reducers/LoginReducer';

const store = createStore(combineReducers({ HomeReducer, LoginReducer }), {},
 applyMiddleware(logger, thunk));
export default store;
