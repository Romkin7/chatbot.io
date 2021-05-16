import React, { FC, useState, FormEvent } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

const MessageForm: FC = () => {
	const [messageFormState, setMessageFormState] = useState({ value: '' });
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
	};
	return (
		<form onSubmit={handleSubmit}>
			<Input
				label="new message"
				name="message"
				type="text"
				changeHandler={(event: any) => setMessageFormState(event.target.value)}
				required
				value={messageFormState.value}
			/>
			<Button color="primary" type="submit" size="md">
				Add
			</Button>
		</form>
	);
};

export default MessageForm;
