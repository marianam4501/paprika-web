import { createSlice } from "@reduxjs/toolkit";
import { recipeReducers } from "./reducers";
import { createRecipe, onCreateRecipeFullfiled, onCreateRecipeRejected } from "./Requests/createRecipe";
import { getFeed, onGetFeedFullfiled, onGetFeedRejected } from "./Requests/getFeed";
import { getRecipe, onGetRecipeFullfiled, onGetRecipeRejected } from "./Requests/getRecipeById";

const recipeSlice = createSlice({
    name: 'item',
    initialState: {
        item: null,
        success: false,
        errorMessage: "",
    },
    reducers: recipeReducers ,
    extraReducers(builder) {
        builder
            .addCase(createRecipe.fulfilled, onCreateRecipeFullfiled)
            .addCase(createRecipe.rejected, onCreateRecipeRejected)
            .addCase(getFeed.fulfilled,onGetFeedFullfiled)
            .addCase(getFeed.rejected,onGetFeedRejected)
            .addCase(getRecipe.fulfilled,onGetRecipeFullfiled)
            .addCase(getFeed.rejected,onGetRecipeRejected)
    }
});

export const { clearState } = recipeSlice.actions;

export default recipeSlice.reducer;