import { createSlice } from "@reduxjs/toolkit";
import { recipeReducers } from "./Reducers/index";
import { createRecipe, onCreateRecipeFullfiled, onCreateRecipeRejected } from "./Requests/createRecipe";
import { getFeed, onGetFeedFullfiled, onGetFeedRejected } from "./Requests/getFeed";
import { getRecipe, onGetRecipeFullfiled, onGetRecipeRejected } from "./Requests/getRecipeById";

const recipeSlice = createSlice({
    name: 'recipe',
    initialState: {
        recipe: null,
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
            .addCase(getRecipe.rejected,onGetRecipeRejected)
    }
});

export const { clearState } = recipeSlice.actions;

export default recipeSlice.reducer;