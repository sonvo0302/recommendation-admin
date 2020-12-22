import { combineReducers } from 'redux';
import auth from './auth/reducer';
import common from './common/reducer';
const rootReducer = combineReducers({ auth, common });

export default rootReducer;
