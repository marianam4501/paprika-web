import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "./User/Requests/postLogin";


const appSlice = createSlice({
    name: 'app',
    initialState: {
        language: 'es',
        loading: false,
    },
    reducers: {
        toggleLoading: (state) => {
            state.loading = !state.loading;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(postLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(postLogin.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(postLogin.rejected, (state) => {
                state.loading = false;
            })
    }
});

export const { toggleLoading } = appSlice.actions;

export default appSlice.reducer;