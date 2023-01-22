import 'styled-components';
import { theme } from '../providers/ThemeProvider/theme';

type CustomTheme = typeof theme;

declare module 'styled-components' {
	export interface DefaultTheme extends CustomTheme {}
}
