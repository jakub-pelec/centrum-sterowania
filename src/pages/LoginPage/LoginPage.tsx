import React from 'react';
import { useForm } from 'react-hook-form';
import { loginSchema } from '@schemas/loginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormWrapper } from './Elements';
import { Input } from '@formComponents/Input';
import { notImplemented } from 'src/utils/notImplemented';
import { login } from '@slices/authSlice';
import { useDispatch } from 'react-redux';

interface IProps {}

export const LoginPage: React.FC<IProps> = () => {
	const { control, handleSubmit } = useForm({
		resolver: yupResolver(loginSchema),
	});
	const dispatch = useDispatch();

	const onSubmit = (data: any) => {
		dispatch(login());
		console.assert(false, notImplemented(onSubmit.name));
	};

	return (
		<FormWrapper>
			<Input control={control} name="email" placeholder="email" />
			<Input control={control} name="password" placeholder="password" />
			<button onClick={handleSubmit(onSubmit)}>login</button>
		</FormWrapper>
	);
};
