import React, { FC, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

const MessageForm: FC = () => {
	const [messageFormState, setMessageFormState] = useState({ value: '' });

	return (
		<form>
			<Input
				label="new message"
				name="message"
				type="text"
				changeHandler={(event: any) => setMessageFormState(event.target.value)}
				required
				value={messageFormState.value}
			/>
			<Button color="primary" type="submit" size="md" buttonText="add" clickHandler={() => {}} />
		</form>
	);
};

export default MessageForm;
