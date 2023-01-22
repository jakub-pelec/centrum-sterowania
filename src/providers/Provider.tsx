import React from 'react';
import { RouterProvider } from './RouterProvider/RouterProvider';
import { ThemeProvider } from './ThemeProvider/ThemeProvider';
import { StoreProvider } from './StoreProvider/StoreProvider';

export const Provider = () => {
	return (
		<ThemeProvider>
			<StoreProvider>
				<RouterProvider />
			</StoreProvider>
		</ThemeProvider>
	);
};
