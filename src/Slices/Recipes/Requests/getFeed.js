import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFeed = createAsyncThunk('recipes/getFeed', async () => {
    const feedFetch = await fetch('https://paprika-api.herokuapp.com/recipes/feed', {
        headers: {

        },
    });
    const feedData = await feedFetch.json();
    console.log("usersDate: ", feedData);
    if (feedFetch.status === 200) {
        return feedData;
    } else {
        return {
            error: true,
            message: feedData.error.message,
        }
    }
});

export const onGetFeedFullfiled = (state, action) => {
    if (action.payload.error) {
        state.users = null;
        state.errorMessage = action.payload.message;
    } else {
        state.users = action.payload;
    }
};

export const onGetFeedRejected = (state) => {
    state.users = null;
}