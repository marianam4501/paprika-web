import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slices/appSlice";
import userSlice from "./Slices/User/userSlice";

 const reducers = combineReducers({
    app : appSlice,
    user : userSlice,

 })

const store = configureStore({
    reducer: reducers,

});

export default store;

