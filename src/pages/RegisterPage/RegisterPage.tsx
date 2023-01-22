import React from 'react';
import { useForm } from 'react-hook-form';
import { registerSchema, TRegisterSchema } from '@schemas/registerSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@formComponents/Input';
import { notImplemented } from 'src/utils/notImplemented';
import { FormWrapper } from './Elements';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/common/routes';

interface IProps {}

export const RegisterPage: React.FC<IProps> = () => {
	const navigate = useNavigate();
	const { control, handleSubmit } = useForm({
		resolver: yupResolver(registerSchema),
	});

	const onSubmit = (data: any) => {
		console.assert(false, notImplemented('registerSubmit'));
		navigate(ROUTES.DASHBOARD);
	};

	return (
		<FormWrapper>
			<Input control={control} name="firstName" placeholder="firstName" />
			<Input control={control} name="lastName" placeholder="lastName" />
			<Input control={control} name="email" placeholder="email" />
			<Input control={control} name="password" placeholder="password" />
			<Input
				control={control}
				name="confirmPassword"
				placeholder="confirmPassword"
			/>
			<button onClick={handleSubmit(onSubmit)}>Submit</button>
		</FormWrapper>
	);
};
