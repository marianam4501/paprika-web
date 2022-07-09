import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slices/appSlice";
import userSlice from "./Slices/User/userSlice";
import recipeSlice from "./Slices/Recipes/recipeSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  app: appSlice,
  user: userSlice,
  recipe: recipeSlice,
});

const rootPersistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(rootPersistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
