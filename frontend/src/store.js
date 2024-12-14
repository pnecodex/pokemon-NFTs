import {createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'

import { adminAuthReducer } from './Reducers/adminAuthReducer';

const reducer = combineReducers({
  admin:adminAuthReducer
});


const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware (...middleware))
);

export default store;