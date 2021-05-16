import React, { FC, useState } from 'react';
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
		</form>
	);
};

export default MessageForm;
