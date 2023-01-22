import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
	isLoggedIn: boolean;
}

const INITIAL_STATE: AuthState = {
	isLoggedIn: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState: INITIAL_STATE,
	reducers: {
		login: (state: AuthState) => ({ ...state, isLoggedIn: true }),
		logout: (state: AuthState) => ({ ...state, isLoggedIn: false }),
	},
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
