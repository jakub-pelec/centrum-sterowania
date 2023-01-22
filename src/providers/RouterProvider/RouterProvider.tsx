import React from 'react';
import {
	createBrowserRouter,
	RouterProvider as NativeRouterProvider,
} from 'react-router-dom';
import { ROUTES } from 'src/common/routes';

import { LoginPage } from '@pages/LoginPage/LoginPage';
import { RegisterPage } from '@pages/RegisterPage/RegisterPage';
import { Dashboard } from '@pages/Dashboard/Dashboard';

interface IProps {}

const router = createBrowserRouter([
	{ path: ROUTES.INDEX, element: <LoginPage /> },
	{ path: ROUTES.REGISTER, element: <RegisterPage /> },
	{ path: ROUTES.DASHBOARD, element: <Dashboard /> },
]);

export const RouterProvider: React.FC<IProps> = () => {
	return <NativeRouterProvider router={router} />;
};
