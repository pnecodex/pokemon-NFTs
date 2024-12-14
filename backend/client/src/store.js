import {createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'

import { adminReducer } from './Reducers/adminReducer';

const reducer = combineReducers({
  admin:adminReducer
});


const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware (...middleware))
);

export default store;