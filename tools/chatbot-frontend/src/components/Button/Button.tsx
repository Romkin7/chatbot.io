import React, { FC } from 'react';
import { ButtonTypes, Sizes } from 'app-shared-types';

interface IButtonProps {
	type: ButtonTypes;
	color: string;
	buttonText: string;
	size: Sizes;
	clickHandler: (event: any) => void;
}

const Button: FC<IButtonProps> = ({ type, color, buttonText, size, clickHandler }) => {
	return (
		<button type={type} className={'button button_' + color + ' ' + size} onClick={(event: any) => clickHandler(event)}>
			{buttonText}
		</button>
	);
};

export default Button;
