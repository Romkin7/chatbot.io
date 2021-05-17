import React, { FC } from 'react';
import { IMessage } from 'app-shared-types';

interface IMessageProps {
	message: IMessage;
}

const Message: FC<IMessageProps> = ({ message }) => {
	return (
		<>
			{message.text ? (
				<p>
					<time dateTime={new Date().toLocaleDateString('fi') + ' ' + new Date().toLocaleTimeString('fi')}>
						{new Date().toLocaleDateString('fi') + ' ' + new Date().toLocaleTimeString('fi')}{' '}
					</time>{' '}
					{message.text}
				</p>
			) : (
				<span></span>
			)}
		</>
	);
};

export default Message;
