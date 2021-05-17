import React, { useState, useEffect, FC } from 'react';
import Message from '../Message/Message';
import MessageForm from '../MessageForm/MessageForm';
import socketIOClient, { Socket } from 'socket.io-client';
import { IMessage } from 'app-shared-types';
const ENDPOINT = 'http://127.0.0.1:8080';
let socket: Socket;

const Chat: FC = () => {
	const [messages, setMessages] = useState<IMessage[]>([{ id: 0, text: '' }]);

	useEffect(() => {
		socket = socketIOClient(ENDPOINT, {
			withCredentials: true,
			extraHeaders: {
				'my-company': 'halkoliiteri.com',
			},
		});
		socket?.on('add-message', (message: string) => {
			setMessages((messages) => [...messages, { id: Date.now(), text: message }]);
		});
		socket?.on('broadcast', (message: string) => {
			setMessages((messages) => [...messages, { id: Date.now(), text: message }]);
		});
		// CLEAN UP THE EFFECT
		return () => socket?.disconnect() as any;
	}, []);

	const addMessage = (text: string) => {
		socket?.emit('new-message', { text });
	};
	return (
		<>
			{messages.map((message: IMessage) => {
				return <Message key={message.id} message={message} />;
			})}
			<MessageForm setMessage={addMessage} />
		</>
	);
};

export default Chat;
