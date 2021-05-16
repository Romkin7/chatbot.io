import React, { FC } from 'react';
import { IMessage } from 'app-shared-types';

interface IMessageProps {
	message: IMessage;
}

const Message: FC<IMessageProps> = ({ message }) => {
	return (
		<p>
			Today's date is: <time dateTime={message.text}>{message.text}</time>
		</p>
	);
};

export default Message;
