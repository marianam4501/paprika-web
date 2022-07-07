import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRecipe = createAsyncThunk('recipes/getRecipe', async (id) => {
    const recipeFetch = await fetch(`https://paprika-api.herokuapp.com/recipes/${id}`, {
        headers: {

        },
    });
    const recipeData = await recipeFetch.json();
    console.log("recipeData: ", recipeData);
    if (recipeFetch.status === 200) {
        return recipeData;
    } else {
        return {
            error: true,
            message: recipeData.error.message,
        }
    }
});

export const onGetRecipeFullfiled = (state, action) => {
    if (action.payload.error) {
        state.users = null;
        state.errorMessage = action.payload.message;
    } else {
        state.users = action.payload;
    }
};

export const onGetRecipeRejected = (state) => {
    state.users = null;
}