import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slices/appSlice";
import userSlice from "./Slices/User/userSlice";
import recipeSlice from "./Slices/Recipes/recipeSlice";

const reducers = combineReducers({
    app : appSlice,
    user : userSlice,
    recipe : recipeSlice,
    

 })

const store = configureStore({
    reducer: reducers,

});

export default store;

