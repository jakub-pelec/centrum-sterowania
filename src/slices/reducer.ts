import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';

const root = combineReducers({
	auth: authReducer,
});

export const store = configureStore({ reducer: root });
