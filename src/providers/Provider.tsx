import React from 'react';
import { RouterProvider } from './RouterProvider/RouterProvider';
import { ThemeProvider } from './ThemeProvider/ThemeProvider';

export const Provider = () => {
	return (
		<ThemeProvider>
			<RouterProvider />
		</ThemeProvider>
	);
};
