import { combineReducers } from "redux";
import { course } from './course';
import { user } from './user';

const RootReducer= combineReducers(
  {
    course,
    user
  }
);

export default RootReducer