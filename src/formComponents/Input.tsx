import React from 'react';
import { Control, Controller } from 'react-hook-form';

interface IProps extends React.HTMLProps<HTMLInputElement> {
	control: Control;
	name: string;
	defaultValue?: string;
}

export const Input: React.FC<IProps> = (props) => {
	const { control, name, defaultValue, ...rest } = props;
	return (
		<Controller
			control={control}
			name={name}
			defaultValue={defaultValue || ''}
			render={({ field }) => <input {...rest} {...field} ref={null} />}
		/>
	);
};
