import React, { PropsWithChildren } from 'react';
import { store } from '@slices/reducer';
import { Provider } from 'react-redux';

interface IProps {}

export const StoreProvider: React.FC<PropsWithChildren<IProps>> = ({
	children,
}) => {
	return <Provider store={store}>{children}</Provider>;
};
