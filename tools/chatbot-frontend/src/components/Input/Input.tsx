import React, { FC } from 'react';
import { InputTypes } from 'app-shared-types';

interface IInputProps {
	type: InputTypes;
	label: string;
	required: boolean;
	disabled?: boolean;
	name: string;
	changeHandler: (event: any) => void;
	value: any;
}

const Input: FC<IInputProps> = ({ type, label, required, disabled, name, changeHandler, value }) => {
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<input id={name} type={type} className="input" onChange={changeHandler} value={value} required={required} disabled={disabled} />
		</>
	);
};

export default Input;
