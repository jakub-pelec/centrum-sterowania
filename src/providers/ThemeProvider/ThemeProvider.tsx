import React from 'react';
import { Children } from 'react';
import { PropsWithChildren } from 'react';
import { GlobalStyles } from 'src/global/style';
import { ThemeProvider as NativeThemeProvider } from 'styled-components';
import { theme } from './theme';

interface IProps {}

export const ThemeProvider: React.FC<PropsWithChildren<IProps>> = ({children}) => {
	return (
		<NativeThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				{children}
			</>
		</NativeThemeProvider>
	);
};
