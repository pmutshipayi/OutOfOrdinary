import { combineReducers } from 'redux';
import userReducer from './features/user/userSlice';
import salesReducer from './features/sales/salesSlice';

const rootReducer = combineReducers({
  user: userReducer,
  sales: salesReducer
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

