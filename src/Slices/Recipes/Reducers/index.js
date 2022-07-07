export const recipeReducers = {
    clearState: (state) => {
        state.recipe = null;
        state.success = false;
        state.errorMessage = "";
    }
};