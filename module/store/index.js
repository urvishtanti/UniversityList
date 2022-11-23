import { combineReducers } from "@reduxjs/toolkit";
import universityReducer from "./reducer";

const rootReducer = combineReducers({
  university: universityReducer,
});

export default rootReducer;
