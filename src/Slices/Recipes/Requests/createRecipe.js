import { createAsyncThunk } from "@reduxjs/toolkit";

export const createRecipe = createAsyncThunk('Recipes/createRecipe', async ({ recipe, photo }) => {
    const form = new FormData();
    form.append('file', photo);
    const uploadFetch = await fetch('https://paprika-api.herokuapp.com/upload', {
        method: 'POST',
        body: form,
    });
    const uploadData = await uploadFetch.json();
    recipe.foto = uploadData.url;
    const itemFetch = await fetch('https://paprika-api.herokuapp.com/recipes', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            userId : recipe.userId,
            name : recipe.name,
            ingredients : recipe.ingredients,
            steps: recipe.steps,
            image: uploadData.url
        }),
    });
    const itemData = await itemFetch.json();
    if (itemFetch.status === 200) {
        return itemData;
    } else {
        return {
            error: true,
            message: itemData.error.message,
        }
    }
});

export const onCreateRecipeFullfiled = (state, action) => {
    if (action.payload.error) {
        state.success = false;
        state.item = null;
        state.errorMessage = action.payload.message;
    } else {
        state.success = true;
        state.item = action.payload;
    }
};

export const onCreateRecipeRejected = (state) => {
    state.success = false;
    state.item = null;
}