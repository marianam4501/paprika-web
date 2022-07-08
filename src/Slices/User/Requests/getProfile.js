import { createAsyncThunk } from "@reduxjs/toolkit";
const jwt = require ('jsonwebtoken');

export const getProfile = createAsyncThunk('users/getProfile', async ({getState}) => {
    console.log("llamado a metodo");
    const state = getState();
    const id = state.user.id;
    console.log(id);
    const profileFetch = await fetch(`https://paprika-api.herokuapp.com/users/${id}`, {
        headers: {
            "Content-type": "application/json"
        },
    });
    const profileData = await profileFetch.json();
    console.log(profileData);
    if (profileFetch.status === 200) {
        return profileData;
    } else {
        return {
            error: true,
            message: profileData.error.message,
        }
    }
});

export const onGetProfileFullfiled = (state, action) => {
    if (action.payload.error) {
        state.user.profile = null;
        state.errorMessage = action.payload.message;
    } else {
        state.user.profile = action.payload;
    }
};

export const onGetProfileRejected = (state) => {
    state.user.profile = null;
}