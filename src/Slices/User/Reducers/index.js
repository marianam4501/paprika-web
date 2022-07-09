export const userReducers = {
    logout: (state) => {
        state.userIsLoggedIn = false;
        state.user.token = null;
        state.user = null;
        state.user.userToken = null;
    }
};