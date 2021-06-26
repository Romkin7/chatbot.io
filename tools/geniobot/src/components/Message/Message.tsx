import React, { FC } from 'react';
import { IMessage } from 'app-shared-types';

interface IMessageProps {
	message: IMessage;
}

const Message: FC<IMessageProps> = ({ message }) => {
	console.log(message);
	return (
		<>
			{message && (
				<p>
					<time dateTime={new Date().toLocaleDateString('fi') + ' ' + new Date().toLocaleTimeString('fi')}>
						{new Date().toLocaleDateString('fi') + ' ' + new Date().toLocaleTimeString('fi')}{' '}
					</time>{' '}
					{message.uname + ' ' + message.text}
				</p>
			)}
		</>
	);
};

export default Message;
