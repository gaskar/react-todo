import { combineReducers } from 'redux';

import todoReducer from "./todo";
import listReducer from "./list";

export default combineReducers({
    lists: listReducer,
    toDos: todoReducer
});
