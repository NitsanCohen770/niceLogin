import todoListReducer from './todoListReducer';
import authReducer from './auth';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  todoList: todoListReducer,
  auth: authReducer,
});

export default rootReducer;
