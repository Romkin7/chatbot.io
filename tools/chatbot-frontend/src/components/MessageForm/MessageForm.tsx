import React, { FC, useState, FormEvent } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

interface IMessageFormProps {
	setMessage: (event: any) => void;
}

const MessageForm: FC<IMessageFormProps> = ({ setMessage }) => {
	const [messageFormState, setMessageFormState] = useState('');
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		setMessage(messageFormState);
	};
	return (
		<form onSubmit={handleSubmit}>
			<Input label="new message" name="message" type="text" changeHandler={setMessageFormState} required />
			<Button color="primary" type="submit" size="md">
				Add
			</Button>
		</form>
	);
};

export default MessageForm;
