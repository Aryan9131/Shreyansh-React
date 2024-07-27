import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: undefined,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        clearUser: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },
        rehydrateUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setUser, clearUser, rehydrateUser } = userSlice.actions;
export default userSlice.reducer;
