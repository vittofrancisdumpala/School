import { createStore, compose, applyMiddleware } from "redux";
import createReducer from "../reducers/rootReducer";
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();
const store = createStore(createReducer({}),[],compose(applyMiddleware(thunkMiddleware,loggerMiddleware)));
store.asyncReducers = {};
export default store;
