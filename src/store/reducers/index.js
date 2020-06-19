import {combineReducers} from 'redux';
import AuthReducer from './auth';
import UserReducer from './user';

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
});

export default rootReducer;
