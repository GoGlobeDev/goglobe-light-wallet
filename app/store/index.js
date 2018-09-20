import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers/index';
import { middleware } from "../containers/app";


const store = applyMiddleware(thunk, logger, middleware)(createStore)(reducers);

window.store = store;
export default store;
